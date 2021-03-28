const db = require('../../database/mysql')
const {errorHandler} = require('../utils')

module.exports = {
    getUnit: async (searchUnitCode) =>
        await db
            .select(
                'unit.unitCode as unitCode',
                'unitName',
                'unitFacultyId',
                'unitDegreeTypeId',
                'synopsis',
                'workloadReq',
                'isActive',
                // 'unit.unitCode',
                // 'unit.unitName',
                // 'faculty.facultyName',
                // 'degree_type.degreeTypeName',
                // 'unit.synopsis',
                // 'unit.worloadRequirements',
                // 'unit_assessment.id',
                // 'unit_assessment.assDesc',
                // 'unit_assessment.assPerc',
                // db.raw('GROUP_CONCAT(unit_prerequisites.preReqUnitCode) as unitPreRequisites'),
                
                db.raw('GROUP_CONCAT(teaching_location.locationName) as locationNames')
                // db.raw('GROUP_CONCAT(teaching_period.teachingPeriodName) as unitTeachingPeriod')
                // '*'
            )
            .from('unit')
            // .leftJoin('unit_prerequistes', 'unitCode', 'unit_prerequistes.unitCode')
            .leftJoin('unit_locations', 'unit.unitCode', 'unit_locations.unitCode')
            .leftJoin('teaching_location', 'locationId', 'teaching_location.id')
            // .leftJoin('teaching_location', 'unit_locations.locationId', 'teaching_location.id')
            // .leftJoin('unit_assessment', 'unitCode', 'unit_assessment.unitCode')
            // .where({unitCode: searchUnitCode})
            .groupBy('unit.unitCode')
            .catch(errorHandler)
        

            

    
    
}