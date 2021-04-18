const unitsSchema = require('./units')
// const optionsSchema = require('./options')

const resolvers = [
    unitsSchema.resolvers
    // optionsSchema.resolvers
]

const typeDefs = [
    unitsSchema.schema
    // optionsSchema.schema
]

module.exports = {
    resolvers,
    typeDefs
}