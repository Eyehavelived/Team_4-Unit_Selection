const db = require('../../database/mysql')
const {errorHandler} = require('../utils')

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



module.exports = {
    getUnit: async (searchUnitCode) =>
        await units()
            .where({'unit.unitCode': searchUnitCode})
            .catch(errorHandler),
    
    getUnits: async () =>
        await units()
            .catch(errorHandler)

    // getUnitsWithFilters: async (filters, rawFilters) =>
    //     await units{}
    //         .where(filters)
    //         .whereRaw(rawFilters)
    //         .catch(errorHandler)

    //.whereRaw('SUBSTR(unit.unitCode, 4, 1) = ?', [3])
}