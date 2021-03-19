INSERT INTO teaching_period(periodName)
VALUES
('Semester 1'),
('Semester 2'),
('Summer A'),
('Summer B'),
('Winter');

INSERT INTO teaching_location(locationName)
VALUES
('Clayton'),
('Caulfield'),
('Malaysia'),
('Peninsula');

INSERT INTO staff(staffName, staffEmailAddr)
VALUES
('Associate Professor Bernhard Jenny', 'Bernie.Jenny@monash.edu'),
('Dr Soon Lay Ki', 'Soon.LayKi@monash.edu'),
('Associate Professor Ting Chee Ming', 'Ting.CheeMing@monash.edu'),
('Mr Stephen Huxford', 'Stephen.Huxford@monash.edu'),
('Dr Ian Tan', 'Ian.Tan1@monash.edu'),
('Associate Professor Anuja Dharmaratne', 'anuja@monash.edu'),
('Dr Arun Konagurthu', 'Arun.Konagurthu@monash.edu');

INSERT INTO degree_type(degreeTypeName)
VALUES
('Undergraduate'),
('Graduate'),
('Postgraduate'),
('Honors'),
('Diploma');

INSERT INTO faculty(facultyName)
VALUES
('Faculty of Information Technology'),
('Faculty of Arts'),
('Faculty of Science');

INSERT INTO course(courseCode, courseName, facultyId, firstYearCredit, secondYearCredit, thirdYearCredit)
VALUES
('C2001', 'Bachelor of Computer Science', 1, 60, 0, 36),
('C6008', 'Master of Computer Science', 1, 0, 0, 0),
('C2000', 'Bachelor of Information Technology', 1, 60, 0, 36),
('S2000', 'Bachelor of Science', 3, 36, 60, 24);

INSERT INTO academic_focus(courseCode, mmName)
VALUES
('S2000', 'Genetics'),
('C2000', 'Business information systems'),
('C2000', 'Computer networks and security'),
('C2000', 'Games development'),
('C2000', 'Interactive media'),
('C2000', 'Software development');

INSERT INTO specialisation(courseCode, specName)
VALUES
('C2001', 'Advanced computer science'),
('C2001', 'Data science');

INSERT INTO unit(unitCode, unitName, unitFacultyId, unitDegreeTypeId, synopsis, workloadReq)
VALUES
('FIT3162', 'Computer Science Project 2', 1, 1, 'This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development or investigation of theory. Projects cover the whole process of software (or hardware) development, from analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. There are no lectures in this unit, although students will be expected to attend regular meetings with their project supervisor.\nThe unit is the second part of a 12-credit point project sequence; the first part and entry point for the project is FIT3161.', 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester typically comprising a mixture of scheduled online and face to face learning activities and independent study. Independent study may include associated reading and preparation for scheduled activities. The unit requires on average three/four hours of scheduled activities per week. Scheduled activities may include a combination of teacher directed learning and online engagement.'),
('FIT3161', 'Computer Science Project 1', 1, 1, 'This unit provides practical experience in researching, designing, developing and testing a substantial computer science project. Projects are generally software-based, although sometimes they may involve hardware development or investigation of theory. Projects cover the whole process of software (or hardware) development, from analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. Students will be expected to meet weekly with their project supervisor during formal lab sessions, and attend 2-hour project management seminars during the first six weeks. Other workshops relevant to research and development of the project will be held in the latter six weeks.\nThe unit is the first part of a 12-credit point project sequence; the second part and exit point for the project is FIT3162.', 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester typically comprising a mixture of scheduled online and face to face learning activities and independent study. Independent study may include associated reading and preparation for scheduled activities. The unit requires on average three/four hours of scheduled activities per week. Scheduled activities may include a combination of teacher directed learning and online engagement.'),
('FIT3155', 'Advanced Data Structures and Algorithms', 1, 1, 'lorem ipsum dolores umbridge', 'your soul because the first assignment will decide your grades'),
('FIT3045', 'Industry-based learning', 1, 1, 'Students on placement participate full time in a defined, graduate level role during a 22-week placement period at established partners of the Faculty of IT industry based learning program including major global companies, leading Australian companies and worldwide consultancies. The students on placement apply the knowledge, skills and practices of professional attitudes and behaviour developed in their academic units. They develop communication, time management, self-reflection and customer service skills in business situations, experience and participate professionally in the corporate environment and obtain feedback from experienced supervisors on their performance.', 'Students on placement are deployed full-time for 22 weeks with the industry partners of the Faculty of IT industry-based learning program in a graduate level role within the company.'),
('FIT2032', 'Industry-based learning', 1, 1, 'Students on placement participate full time in a defined, graduate level role during a 22-week placement period at established partners of the Faculty of Information Technology industry based learning program including major global companies, leading Australian companies and worldwide consultancies. The students on placement apply the knowledge, skills and practices of professional attitudes and behaviour developed in their academic units. They develop communication, time management and customer service skills in business situations, experience and participate professionally in the corporate environment and obtain feedback from experienced supervisors on their performance.', 'Students are on placement full-time for 22 weeks with the partners of the industry based learning program in a graduate level role within the company.');

INSERT INTO unit_assessment(id, courseCode, assDesc, assPerc)
VALUE
(1, 'FIT3155', 'In-semester assessment', 0.40),
(2, 'FIT3155', 'Examination (2 hours and 10 minutes)', 0.60),
(1, 'FIT3162', 'In-semester assessment', 1.00),
(1, 'FIT3161', 'In-semester assessment', 1.00),
(1, 'FIT3045', 'Initial/Revised Goals, Contents of Logs and Reflections', 0.06),
(2, 'FIT3045', '3 Academic Visits', 0.05),
(3, 'FIT3045', 'Frequency of Log and Reflection Submission', 0.02),
(4, 'FIT3045', 'Mid-Placement Evaluation', 0.20),
(5, 'FIT3045', 'End-Placement Evaluation', 0.30),
(6, 'FIT3045', 'Reports', 0.14),
(7, 'FIT3045', 'Presentation', 0.20),
(8, 'FIT3045', 'CV', 0.03),
(1, 'FIT2032', 'Mid-Placement Evaluation', 0.20),
(2, 'FIT2032', 'End-Placement Evaluation', 0.30),
(3, 'FIT2032', 'Written Reports', 0.23),
(4, 'FIT2032', 'Oral Presentation', 0.20),
(5, 'FIT2032', 'Visit preparation', 0.05),
(6, 'FIT2032', 'Regular Maintenance of Daily Log Book including weekly reflection', 0.02),
