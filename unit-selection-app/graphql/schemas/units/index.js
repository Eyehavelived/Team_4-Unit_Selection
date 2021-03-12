const searchUnits = require('./mocks/searchUnits')
const compareUnits = require('./mocks/compareUnits')
const scheduleUnits = require('./mocks/scheduleUnits')

const fs = require('fs')
const path = require('path')

module.exports = {
    resolvers: {
        Query:  {
            searchUnits: () => searchUnits,
            compareUnits: () => compareUnits,
            scheduleUnits: () => scheduleUnits
        }
    },
    schema: fs.readFileSync(
        path.resolve(
            __dirname,
            './units-schema.graphql'
        )
    ).toString()
}