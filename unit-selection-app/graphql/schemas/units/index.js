// const searchUnits = require('./mocks/searchUnits')
// const compareUnits = require('./mocks/compareUnits')
// const scheduleUnits = require('./mocks/scheduleUnits')

const fs = require('fs')
const path = require('path')
const PostService = require('../../api/units')
const {errorHandler} = require('../../api/utils')

const db = require('../../database/mysql')

const getUnitsCurry = cb =>
    async (parent, args, ctx, info) => {
        const units = await cb(args, parent)
            .catch(errorHandler)
        if (!units.length) {
            console.log("No units found")
            return []
        }
        // temp = [...units]
        return units.map(({locationNames, teachingPeriodNames, unitPreRequisites, unitCoRequisites, unitProhibitions, ...rest}) => ({
            locationNames: [...new Set(locationNames.split(","))],
            unitPreRequisites: [...new Set(unitPreRequisites ? unitPreRequisites.split(",") : "")],
            unitCoRequisites: [...new Set(unitCoRequisites ? unitCoRequisites.split(",") : "")],
            unitProhibitions: [...new Set(unitProhibitions ? unitProhibitions.split(",") : "")],
            teachingPeriods: [...new Set(teachingPeriodNames.split(","))],
            ...rest
        }))
    }

// placeholder
const filters = (options) => {
    console.log(options)
    return true
}

module.exports = {
    resolvers: {
        Query:  {
            getUnit: getUnitsCurry(
                async ({unitCode}) => await PostService.getUnit(unitCode)
            ),

            getUnits: getUnitsCurry(
                async () => await PostService.getUnits()
            // ),
            
            // getUnitsWithFilters: getUnitsCurry(
            //     async (options) => await PostService.getUnitsWithFilters(filters(options))
            )
        }
    },
    schema: fs.readFileSync(
        path.resolve(
            __dirname,
            './units-schema.graphql'
        )
    ).toString()
}