import gql from 'graphql-tag'

export const GET_UNIT_BY_UNITCODE_QUERY = gql`
    query getUnit($unitCode: String) {
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
`
export const GET_ALL_UNITS_QUERY = gql`
    query getUnits {
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
`

export const GET_FILTERED_UNITS_QUERY = gql`
    query getSelectionUnits($filterJSON: String) {
        units: getUnitsWithFilters(filterJSON: $filterJSON) {
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
