const moment = require('moment')

module.exports = [
    {
        unitCode: 'FIT3162',
        unitName: 'Computer Science Project 2',
        unitFaculty: 'Faculty of Information Technology',
        degreeType: 'Undergraduate',
        unitPreRequisite: 'FIT3161',
        unitCoRequisite: null,
        unitProhibition: 'FIT3144',
        unitTeachingPeriod: [{
            periodName: 'Semester 1'
        },
        {
            periodName: 'Semester 2'
        },
        {
            periodName: 'Summer A'
        }],
        location: [
            {
                locationName: 'Malaysia'
            },
            {
                locationName: 'Clayton'
            },
            {
                locationName: 'Flexible'
            }
        ],
        synopsis: 'This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project.',
        learningOutcomes: '1. Evaluate and select research methods and technics\n2.Search access',
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
                contactName: 'Associate Professor Bernhard Jenny',
                contactEmail: 'Bernie.Jenny@monash.edu',
                contactRole: 'Chief Examiner'
            },
            {
                contactName: 'Associate Professor Ting Chee Ming',
                contactEmail: 'Ting.CheeMing@monash.edu',
                contactRole: 'Unit Coordinator'
            }
        ]
    }
]