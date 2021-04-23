const db = require('../../database/mysql');
const {errorHandler} = require('../utils');

// This has to be a call back function and not a constant, because each instance of
// a query is final and cannot revert back to its unfiltered form.
const units = () =>
    db
    .select(
        'unit.unitCode as unitCode',
        'unitName',
        'unitFacultyId',
        'unitDegreeTypeId',
        'synopsis',
        'workloadReq',
        'isActive',
        'faculty.facultyName as facultyName',
        'degree_type.degreeTypeName as degreeType',
        db.raw('GROUP_CONCAT(unit_prerequisites.preReqUnitCode) as unitPreRequisites'),
        db.raw('GROUP_CONCAT(unit_prohibitions.prohUnitCode) as unitProhibitions'),
        db.raw('GROUP_CONCAT(unit_corequisites.coReqUnitCode) as unitCoRequisites'),
        db.raw('GROUP_CONCAT(teaching_location.locationName) as locationNames'),
        db.raw('GROUP_CONCAT(teaching_period.periodName) as teachingPeriodNames'),
    )
    .from('unit')
    .leftJoin('unit_prerequisites', 'unit.unitCode', 'unit_prerequisites.unitCode')
    .leftJoin('unit_prohibitions', 'unit.unitCode', 'unit_prohibitions.unitCode')
    .leftJoin('unit_corequisites', 'unit.unitCode', 'unit_corequisites.unitCode')
    .leftJoin('unit_locations', 'unit.unitCode', 'unit_locations.unitCode')
    .leftJoin('teaching_location', 'locationId', 'teaching_location.id')
    .leftJoin('unit_teaching_periods','unit.unitCode', 'unit_teaching_periods.unitCode')
    .leftJoin('teaching_period', 'unit_teaching_periods.tpId', 'teaching_period.id')
    .leftJoin('faculty', 'unitFacultyId', 'faculty.id')
    .leftJoin('degree_type', 'unitDegreeTypeId', 'degree_type.id')
    .groupBy('unit.unitCode')
    .where(
        {"unit.unitCode": "FIT3162"}
    )
    // TODO: unit_assessments, contacts, other_requisite


const filters = (options) => {
    const whereCalls = []
    const whereFilters = {}
    if (options["year"].length > 0) {
        // We would expect years to come in as a list such as
        // ["3", "hons"] meaning year 3 units and hons units
        const years = options["year"]
        const listArg = []
        years.forEach((year) => {
            switch(year) {
                case "1":
                    listArg.push("1")
                    break
                case "2":
                    listArg.push("2")
                    break
                case "3":
                    listArg.push("3")
                    break
                case "Hons":
                    listArg.push("4")
                    if (!whereFilters["degree_type.id"]) {
                        whereFilters["degree_type.id"] = [1]
                    } else {
                        if (!whereFilters["degree_type.id"].includes(1)){
                            whereFilters["degree_type.id"] = whereFilters["degree_type.id"].push(2)
                        }
                    }
                    break

                // To be confirmed if masters part 1 units start with 4, or if it's just Arts being weird.
                // if not, this can be changed to just Masters and we filter by graduate
                case "Masters (Part 1)":
                    listArg.push("4")
                    if (!whereFilters["degree_type.id"]) {
                        whereFilters["degree_type.id"] = [2]
                    } else {
                        if (!whereFilters["degree_type.id"].includes(2)){
                            whereFilters["degree_type.id"].push(2)
                        }
                    }
                    break
                case "Masters (Part 2)":
                    listArg.push("5")
                    break
                default:
                    errorHandler(new Error("Invalid year value provided %s" % year))
                    break
            }
        })

        const rawStr = listArg.reduce((accumulator, yearVal) =>{
            accumulator
                .push("SUBSTRING(unit.unitCode, 4, 1) = "
                    .concat(yearVal))
            return accumulator
                }, [])
            .join(" OR ")

        whereCalls.push(["whereRaw", rawStr])
    }

    if (options["semester"].length > 0) {
        // we would expect the semester to have the semester ids in the values
        // semester would have the ids because in order to add semester to the display, it should query the db for what semesters are available
        // likewise with faculties and degree types
        whereCalls.push(["whereIn", 'unit_teaching_periods.tpId', options["semester"].map(val => parseInt(val))])
    }
    if (options["faculty"].length > 0) {
        // we expect the matching values to be a list of faculties
        whereCalls.push(["whereIn", 'unit.unitFacultyId', options["faculty"].map(val => parseInt(val))])
    }
    if (options["location"].length > 0) {
        whereCalls.push(["whereIn", 'unit.unitLocation', options["location"].map(val => parseInt(val))])
    }


    for (const [key, value] of Object.entries(whereFilters)) {
        whereCalls.push("whereIn", key, value)
      }

    return whereCalls
}


module.exports = {
    getUnit: async (searchUnitCode) => 
        await units()
            .where({'unit.unitCode': searchUnitCode})
            .catch(errorHandler),
    
    getUnits: async () => 
        await units()
            .catch(errorHandler),

    getUnitsWithFilters: async (optionsString) => {
        // because it's a MASSIVE pain to pass varying values through the schema file, we'll decompress the query here.
        // This is an example of what options would look like
        // testOptions = {
        //     "year": ["3", "1"],
        //     "semester": [2],
        //     "faculty": [1],
        //     "location": []
        // }
        const options = JSON.parse(optionsString) 
        const arrayList = filters(JSON.parse(options.optionsString))

        return await arrayList.reduce((accumulator, arrRow) => {
            const [whereType, ...rest] = arrRow
            switch (whereType) {
                case "whereIn":
                    return accumulator.whereIn(...rest)
                case "where":
                    return accumulator.where(...rest)
                case "whereRaw":
                    return accumulator.whereRaw(...rest)
                default:
                    errorHandler(new Error("No whereType provided in row containing: ".concat(whereType)))
            }
            
        }, units()).catch(errorHandler)
    },
    // ----------------------------- Not units
    getFaculties: async () =>
        await db
            .select(
                'id',
                'facultyName'
            )
            .from('faculty')
            .catch(errorHandler),
    getLocations: async () =>
        await db
            .select(
                'id',
                'locationName'
            )
            .from('teaching_location')
            .catch(errorHandler),
    getTeachingPeriods: async () =>
        await db
            .select(
                'id',
                'periodName'
            )
            .from('teaching_period')
            .catch(errorHandler)
}