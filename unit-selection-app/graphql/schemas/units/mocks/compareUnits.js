const moment = require('moment')

module.exports = [
    {
        unitCode: 'FIT3162',
        unitName: 'Computer Science Project 2',
        unitFaculty: 'Faculty of Information Technology',
        degreeType: 'Undergraduate',
        unitPreRequisite: ['FIT3161'],
        unitCoRequisite: [],
        unitProhibition: ['FIT3144'],
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
        ],
        synopsis: 'This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project.',
        assessment: [
            {
                assessmentName: 'Journal Entries',
                assessmentWeightage: 0.05
            },
            {
                assessmentName: 'Interim Presentation',
                assessmentWeightage: 0.05
            },
            {
                assessmentName: 'Software Deliverables',
                assessmentWeightage: 0.25
            },
            {
                assessmentName: 'Final Report',
                assessmentWeightage: 0.45
            },
            {
                assessmentName: 'Team Management',
                assessmentWeightage: 0.1
            },
        ],
        workloadRequirements: '144 hours per semester',
        contacts: [
            {
                staffId: 1,
                contactName: 'Associate Professor Bernhard Jenny',
                contactEmail: 'Bernie.Jenny@monash.edu',
                contactRole: 'Chief Examiner'
            },
            {
                staffId: 2,
                contactName: 'Associate Professor Ting Chee Ming',
                contactEmail: 'Ting.CheeMing@monash.edu',
                contactRole: 'Unit Coordinator'
            }
        ]
    }
]