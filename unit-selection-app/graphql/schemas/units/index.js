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
        
        // From the query, we get locations as a single string "Malaysia,Clayton,Caulfield"
        // This splits them into list of strings
        return units.map(({locationNames, teachingPeriodNames, unitPreRequisites, unitCoRequisites, unitProhibitions, courseNames, majorMinorNames, specNames, ...rest}) => ({
            locationNames: [...new Set(locationNames.split(","))],
            unitPreRequisites: [...new Set(unitPreRequisites ? unitPreRequisites.split(",") : "")],
            unitCoRequisites: [...new Set(unitCoRequisites ? unitCoRequisites.split(",") : "")],
            unitProhibitions: [...new Set(unitProhibitions ? unitProhibitions.split(",") : "")],
            teachingPeriods: [...new Set(teachingPeriodNames.split(","))],
            courseNames: [...new Set(courseNames ? courseNames.split(",") : "")],
            majorMinorNames: [...new Set(majorMinorNames ? majorMinorNames.split(",") : "")],
            specNames:[...new Set(specNames ? specNames.split(",") : "")],
            ...rest
        }))
    }

const getOptionsCurry = cb =>
    async (parent, args, ctx, info) => {
        const options = await cb(args, parent)
            .catch(errorHandler)
        if (!options.length) {
            console.log("No units found")
            return []
        }
        
        return options
    }

module.exports = {
    resolvers: {
        Query:  {
            getUnit: getUnitsCurry(
                async ({unitCode}) => await PostService.getUnit(unitCode)
            ),

            getUnits: getUnitsCurry(
                async () => await PostService.getUnits()
            ),
            
            getUnitsWithFilters: getUnitsCurry(
                async (options) => await PostService.getUnitsWithFilters(JSON.stringify(options))
            ),

            // ------------------------------
            getFaculties: getOptionsCurry(
                async () => await PostService.getFaculties()
            ),
            getLocations: getOptionsCurry(
                async () => await PostService.getLocations()
            ),
            getTeachingPeriods: getOptionsCurry(
                async () => await PostService.getTeachingPeriods()
            ),
            getSpecialisations: getOptionsCurry(
                async () => await PostService.getSpecialisations()
            ),
            getCourses: getOptionsCurry(
                async () => await PostService.getCourses()
            ),
            getAcademicFocus:getOptionsCurry(
                async () => await PostService.getAcademicFocus()
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