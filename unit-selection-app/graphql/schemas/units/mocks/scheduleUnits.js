const moment = require('moment')

module.exports = [
    {
        unitCode: 'FIT3162',
        unitName: 'Computer Science Project 2',
        unitPreRequisite: [{
            prereqUnitCode: 'FIT3161'
        }],
        unitCoRequisite: [],
        unitProhibition: [{
            prohibitionUnitCode: 'FIT3144'
        }],
        unitTeachingPeriod: [{
            periodId: 1,
            periodName: 'Semester 1'
        },
        {
            periodId: 2,
            periodName: 'Semester 2'
        },
        {
            periodId: 3,
            periodName: 'Summer A'
        }],
        location: [
            {
                locationId: 2,
                locationName: 'Malaysia'
            },
            {
                locationId: 1,
                locationName: 'Clayton'
            },
            {
                locationId: 4,
                locationName: 'Flexible'
            }
        ]
    }
]