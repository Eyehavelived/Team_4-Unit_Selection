const db = require('../../database/mysql')
const {errorHandler} = require('../utils')

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
    .innerJoin('unit_locations', 'unit.unitCode', 'unit_locations.unitCode')
    .innerJoin('teaching_location', 'locationId', 'teaching_location.id')
    .innerJoin('unit_teaching_periods','unit.unitCode', 'unit_teaching_periods.unitCode')
    .innerJoin('teaching_period', 'unit_teaching_periods.tpId', 'teaching_period.id')
    .leftJoin('faculty', 'unitFacultyId', 'faculty.id')
    .leftJoin('degree_type', 'unitDegreeTypeId', 'degree_type.id')
    .groupBy('unit.unitCode')
    // TODO: unit_assessments, contacts, other_requisite
    // .where({'unit.unitCode': searchUnitCode})
    // .where({'unit.unitCode': "SUBSTR(unit.unitCode, 4, 1) = '3'"})
    // .catch(errorHandler)

// placeholder
const filters = (options) => {
    whereCalls = []
    whereFilters = {}
    whereRawFilters = []
    if (options["year"]) {
        // We would expect years to come in as a list such as
        // ["3", "hons"] meaning year 3 units and hons units
        const years = options["year"]
        const listArg = []
        years.forEach((year) => {
            switch(year) {
                case "1":
                    listArg = listArg.append(1)
                    break
                case "2":
                    listArg = listArg.append(2)
                    break
                case "3":
                    listArg = listArg.append(3)
                    break
                case "Hons":
                    listArg = listArg.append(4)
                    if (!whereFilters["degree_type.id"]) {
                        whereFilters["degree_type.id"] = 1
                    } else {
                        if (!whereFilters["degree_type.id"].includes(1)){
                            whereFilters["degree_type.id"] = whereFilters["degree_type.id"].append(2)
                        }
                    }
                    break

                // To be confirmed if masters part 1 units start with 4, or if it's just Arts being weird.
                // if not, this can be changed to just Masters and we filter by graduate
                case "Masters (Part 1)":
                    listArg = listArg.append(4)
                    if (!whereFilters["degree_type.id"]) {
                        whereFilters["degree_type.id"] = 2
                    } else {
                        if (!whereFilters["degree_type.id"].includes(2)){
                            whereFilters["degree_type.id"] = whereFilters["degree_type.id"].append(2)
                        }
                    }
                    
                    break
                case "Masters (Part 2)":
                    listArg = listArg.append(5)
                    break
                default:
                    errorHandler(new Error("Invalid year value provided %s" % year))
                    break
            }
        })
        whereFilters = whereRawFilters.append(["SUBSTRING(unit.unitcode, 4, 1) = ?", listArg])
    }

    if (options["semester"]) {
        // we would expect the semester to have the semester ids in the values
        // semester would have the ids because in order to add semester to the display, it should query the db for what semesters are available
        // likewise with faculties and degree types
        whereCalls = whereCalls.append(() => whereIn())
    }
    return ["'true'"]
}


module.exports = {
    getUnit: async (searchUnitCode) =>
        await units()
            .where({'unit.unitCode': searchUnitCode})
            .catch(errorHandler),
    
    getUnits: async () =>
        await units()
            .catch(errorHandler),

    getUnitsWithFilters: async () => {
        // // because it's a MASSIVE pain to pass varying values through the schema file, we'll decompress the query here.
        // filtersObj = JSON.parse(filtersString) 

        // // the .whereRaw() method accepts arguments that are typically strings, but can also have integers as well.
        // // so the whereRawListOfList will have the arguments for a clause on each line, that can be deconstructed with ...ListRow
        // whereRawListOfList = JSON.parse(whereRawExpr) 

        // qry = units()
        //     .where(whereObj)
        
        arrayList = [["SUBSTRING(unit.unitCode, 4, 1) = ?", [1]], ["unit_locations.locationId = ?", [1]]]

        return await arrayList.reduce((accumulator, arrRow) => {
            return accumulator.whereRaw(...arrRow)
        }, units()).catch(errorHandler)

        // whereRawListOfList.forEach(arrayRow => {
        //     qry = qry.where(...arrayRow)
        // });

        // return await qry.catch(errorHandler)
    }

    //.whereRaw('SUBSTR(unit.unitCode, 4, 1) = ?', [3])
}