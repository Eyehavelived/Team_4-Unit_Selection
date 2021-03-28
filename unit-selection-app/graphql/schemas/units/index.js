// const searchUnits = require('./mocks/searchUnits')
// const compareUnits = require('./mocks/compareUnits')
// const scheduleUnits = require('./mocks/scheduleUnits')

const fs = require('fs')
const path = require('path')
const PostService = require('../../api/units')
const {errorHandler} = require('../../api/utils')

const getUnitsCurry = cb =>
    async (parent, args, ctx, info) => {
        const units = await cb(args, parent)
            .catch(errorHandler)
        if (!units.length) {
            console.log("No units found")
            return []
        }
        // temp = [...units]
        return units.map(({locationNames, teachingPeriodNames, unitPreRequisites, ...rest}) => ({
            locationNames: [...new Set(locationNames.split(","))],
            unitPreRequisites: [...new Set(unitPreRequisites.split(","))],
            teachingPeriods: [...new Set(teachingPeriodNames.split(","))],
            ...rest
        }))
    }

module.exports = {
    resolvers: {
        Query:  {
            getUnit: getUnitsCurry(
                async ({unitCode}) => await PostService.getUnit(unitCode)
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