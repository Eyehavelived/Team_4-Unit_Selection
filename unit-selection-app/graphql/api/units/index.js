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
                'faculty.facultyName as facultyName',
                'degree_type.degreeTypeName as degreeType',
                // 'unit.unitCode',
                // 'unit.unitName',
                // 'faculty.facultyName',
                // 'degree_type.degreeTypeName',
                // 'unit.synopsis',
                // 'unit.worloadRequirements',
                // 'unit_assessment.id',
                // 'unit_assessment.assDesc',
                // 'unit_assessment.assPerc',
                db.raw('GROUP_CONCAT(unit_prerequisites.preReqUnitCode) as unitPreRequisites'),
                
                db.raw('GROUP_CONCAT(teaching_location.locationName) as locationNames'),
                db.raw('GROUP_CONCAT(teaching_period.periodName) as teachingPeriodNames'),
                // db.raw('GROUP_CONCAT(unit_assessment.id, unit_assessment.assDesc, unit_assessment.assPerc) as unitAssessments')
                // '*'
            )
            .from('unit')
            .leftJoin('unit_prerequisites', 'unit.unitCode', 'unit_prerequisites.unitCode')
            .innerJoin('unit_locations', 'unit.unitCode', 'unit_locations.unitCode')
            .innerJoin('teaching_location', 'locationId', 'teaching_location.id')
            .innerJoin('unit_teaching_periods','unit.unitCode', 'unit_teaching_periods.unitCode')
            .innerJoin('teaching_period', 'unit_teaching_periods.tpId', 'teaching_period.id')
            .leftJoin('faculty', 'unitFacultyId', 'faculty.id')
            .leftJoin('degree_type', 'unitDegreeTypeId', 'degree_type.id')
            .groupBy('unit.unitCode')
            // leaving out unit_assessments for now. TODO
            // leaving out contacts for the same reason
            // .leftJoin('unit_assessment', 'unit.unitCode', 'unit_assessment.unitCode')
            .where({'unit.unitCode': searchUnitCode})
            
            .catch(errorHandler)
        

            

    
    
}