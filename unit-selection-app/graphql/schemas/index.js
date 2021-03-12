const unitsSchema = require('./units')

const resolvers = [
    unitsSchema.resolvers
]

const typeDefs = [
    unitsSchema.schema
]

module.exports = {
    resolvers,
    typeDefs
}