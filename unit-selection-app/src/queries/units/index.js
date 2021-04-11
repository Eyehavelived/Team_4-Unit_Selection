import gql from '@apollo/client';

export const GET_UNIT_BY_UNITCODE_QUERY = gql`
    query getUnitFromUnitcode($unitCode: String) { 
        getUnit(unitCode: $unitCode) {
            unitCode
            unitName
            synopsis
            unitCoRequisites
            unitProhibitions
            unitPreRequisites
            teachingPeriods
            locationNames
            facultyName
            degreeType
            isActive
        }
    }
`

export const GET_ALL_UNITS_QUERY = gql`
    query getAllUnits {
        getUnits {
            unitCode
            unitName
            synopsis
            unitCoRequisites
            unitProhibitions
            unitPreRequisites
            teachingPeriods
            locationNames
            facultyName
            degreeType
            isActive
        }
    }
`

export const GET_FILTERED_UNITS_QUERY = gql`
    query getSelectionUnits($whereRawExpr: String) {
        units: getUnitsWithFilters(whereRawExpr: $whereRawExpr) {
            unitCode
            unitName
            synopsis
            unitCoRequisites
            unitProhibitions
            unitPreRequisites
            teachingPeriods
            locationNames
            facultyName
            degreeType
            isActive
        }
    }
`
