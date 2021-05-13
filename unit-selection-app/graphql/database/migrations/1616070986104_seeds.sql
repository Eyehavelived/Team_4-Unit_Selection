SET @@global.sql_mode= '';

INSERT INTO teaching_period(id, periodName)
VALUES
(1, 'Semester 1'),
(2, 'Semester 2'),
(3, 'Summer A'),
(4, 'Summer B'),
(5, 'Winter');

INSERT INTO teaching_location(id, locationName)
VALUES
(1, 'Clayton'),
(2, 'Caulfield'),
(3, 'Malaysia'),
(4, 'Peninsula');

INSERT INTO staff(id, staffName, staffEmailAddr)
VALUES
(1,'Associate Professor Bernhard Jenny', 'Bernie.Jenny@monash.edu'),
(2,'Dr Soon Lay Ki', 'Soon.LayKi@monash.edu'),
(3,'Associate Professor Ting Chee Ming', 'Ting.CheeMing@monash.edu'),
(4,'Mr Stephen Huxford', 'Stephen.Huxford@monash.edu'),
(5,'Dr Ian Tan', 'Ian.Tan1@monash.edu'),
(6,'Associate Professor Anuja Dharmaratne', 'anuja@monash.edu'),
(7,'Dr Arun Konagurthu', 'Arun.Konagurthu@monash.edu'),
(8,'Dr Mario Boley', 'Mario.Boley@monash.edu'),
(9,'Mr Ganesh Krishnasamy', 'Ganesh.Krishnasamy@monash.edu'),
(10,'Dr Graeme Gange', 'Graeme.Gange@monash.edu'),
(11,'Associate Professor Anuja Dharmaratne', 'anuja@monash.edu'),
(12,'Taylor Kearney', 'Taylor.Kearney@monash.edu'),
(13,'Ms Kamalashunee Velautham', 'Kamalnee.Kvem@monash.edu'),
(14,'Ms ashunee Velautham', 'Kamaee.Kvelsm@monash.edu');

INSERT INTO degree_type(id,degreeTypeName)
VALUES
(1,'Undergraduate'),
(2,'Graduate'),
(3,'Postgraduate'),
(4,'Honors'),
(5,'Diploma');

INSERT INTO faculty(id,facultyName)
VALUES
(1,'Faculty of Information Technology'),
(2,'Faculty of Arts'),
(3,'Faculty of Science');

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

INSERT INTO specialisation(id, courseCode, specName)
VALUES
(1, 'C2001', 'Advanced computer science'),
(2, 'C2001', 'Data science');

INSERT INTO unit(unitCode, unitName, unitFacultyId, unitDegreeTypeId, synopsis, workloadReq)
VALUES
('FIT3162', 'Computer Science Project 2', 1, 1, 'This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development or investigation of theory. Projects cover the whole process of software (or hardware) development, from analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. There are no lectures in this unit, although students will be expected to attend regular meetings with their project supervisor.\nThe unit is the second part of a 12-credit point project sequence; the first part and entry point for the project is FIT3161.', 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester typically comprising a mixture of scheduled online and face to face learning activities and independent study. Independent study may include associated reading and preparation for scheduled activities. The unit requires on average three/four hours of scheduled activities per week. Scheduled activities may include a combination of teacher directed learning and online engagement.'),
('FIT3161', 'Computer Science Project 1', 1, 1, 'This unit provides practical experience in researching, designing, developing and testing a substantial computer science project. Projects are generally software-based, although sometimes they may involve hardware development or investigation of theory. Projects cover the whole process of software (or hardware) development, from analysis through design to implementation and testing. Comprehensive written documentation on the project is required. Students are assigned in groups to a project supervisor. Students will be expected to meet weekly with their project supervisor during formal lab sessions, and attend 2-hour project management seminars during the first six weeks. Other workshops relevant to research and development of the project will be held in the latter six weeks.\nThe unit is the first part of a 12-credit point project sequence; the second part and exit point for the project is FIT3162.', 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester typically comprising a mixture of scheduled online and face to face learning activities and independent study. Independent study may include associated reading and preparation for scheduled activities. The unit requires on average three/four hours of scheduled activities per week. Scheduled activities may include a combination of teacher directed learning and online engagement.'),
('FIT3155', 'Advanced Data Structures and Algorithms', 1, 1, 'lorem ipsum dolores umbridge', 'your soul because the first assignment will decide your grades'),
('FIT3045', 'Industry-based learning', 1, 1, 'Students on placement participate full time in a defined, graduate level role during a 22-week placement period at established partners of the Faculty of IT industry based learning program including major global companies, leading Australian companies and worldwide consultancies. The students on placement apply the knowledge, skills and practices of professional attitudes and behaviour developed in their academic units. They develop communication, time management, self-reflection and customer service skills in business situations, experience and participate professionally in the corporate environment and obtain feedback from experienced supervisors on their performance.', 'Students on placement are deployed full-time for 22 weeks with the industry partners of the Faculty of IT industry-based learning program in a graduate level role within the company.'),
('FIT2032', 'Industry-based learning', 1, 1, 'Students on placement participate full time in a defined, graduate level role during a 22-week placement period at established partners of the Faculty of Information Technology industry based learning program including major global companies, leading Australian companies and worldwide consultancies. The students on placement apply the knowledge, skills and practices of professional attitudes and behaviour developed in their academic units. They develop communication, time management and customer service skills in business situations, experience and participate professionally in the corporate environment and obtain feedback from experienced supervisors on their performance.', 'Students are on placement full-time for 22 weeks with the partners of the industry based learning program in a graduate level role within the company.'),
('FIT1048', 'Fundamentals of C++', 1, 1, 'This unit introduces programming fundamentals and the C++ language to students.', 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester'),
('FIT1045', 'Algorithms and programming fundamentals in python', 1, 1, 'This unit introduces programming fundamentals and the Python language to students. The unit provides a foundational understanding of program design and implementation of algorithms to solve simple problems.', 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester.');

INSERT INTO unit_assessment(id, unitCode, assDesc, assPerc)
VALUE
(1, 'FIT3155', 'Assignment 1', 0.10),
(2, 'FIT3155', 'Assignment 2', 0.10),
(3, 'FIT3155', 'Assignment 3', 0.20),
(4, 'FIT3155', 'Examination (2 hours and 10 minutes)', 0.60),
(1, 'FIT3162', 'Journal Entries', 0.05),
(2, 'FIT3162', 'Interim Presentation', 0.05),
(3, 'FIT3162', 'Final Presentation', 0.10),
(4, 'FIT3162', 'Software Deliverables', 0.25),
(5, 'FIT3162', 'Final Report', 0.45),
(6, 'FIT3162', 'Team Management', 0.10),
(1, 'FIT3161', 'Journal Entry 1', 0.02),
(2, 'FIT3161', 'Journal Entry 2', 0.02),
(3, 'FIT3161', 'Journal Entry 3', 0.02),
(4, 'FIT3161', 'Project Management Case Studies', 0.10),
(5, 'FIT3161', 'Project Management Quizzes', 0.10),
(6, 'FIT3161', 'Project Design', 0.10),
(7, 'FIT3161', 'Project Progress Report', 0.00),
(8, 'FIT3161', 'Presentation of Project Plan', 0.10),
(9, 'FIT3161', 'Project Proposal with Literature Review', 0.50),
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
(1, 'FIT1048', 'Assignment 1 - Task-oriented Minor Project', 0.10),
(2, 'FIT1048', 'Major Project - Project Plan and Design Documentation', 0.15),
(3, 'FIT1048', 'C++ Project Implementation', 0.25),
(4, 'FIT1048', 'Examination', 0.50),
(1, 'FIT1045', 'Tutorial Preparation', 0.08),
(2, 'FIT1045', 'Workshops', 0.19),
(3, 'FIT1045', 'In-semester Tests', 0.11),
(4, 'FIT1045', 'Assignment', 0.22),
(5, 'FIT1045', 'Examination', 0.40);

INSERT INTO other_requisite(id, unitCode, otherPrereqDesc)
VALUES
(1, 'FIT2032', 'at least 72 credit points including 60 FIT or MAT credit points'),
(1, 'FIT3045', 'at least 72 credit points including 60 FIT or MAT credit points'),
(1, 'FIT1045', 'VCE Mathematics Methods or Specialist Mathematics units 3 & 4 with a study score of 25');

INSERT INTO specialisation_units(specialisationId, unitCode)
VALUES
(1, 'FIT3155'),
(1, 'FIT3161'),
(1, 'FIT3162'),
(1, 'FIT2032'),
(1, 'FIT3045'),
(2, 'FIT2032'),
(2, 'FIT3045');

INSERT INTO academic_focus_units(mmId, unitCode)
VALUES
(3, 'FIT1048'),
(3, 'FIT1045'),
(4, 'FIT1048'),
(6, 'FIT1045'),
(6, 'FIT1048');

INSERT INTO course_core_units(courseCode, unitCode)
VALUES
('C2000', 'FIT1045'),
('C2000', 'FIT1048'),
('C2000', 'FIT3045'),
('C2001', 'FIT1045'),
('C2001', 'FIT3161'),
('C2001', 'FIT3162'),
('C2001', 'FIT3045');

INSERT INTO unit_contacts(unitCode, staffId, contactAppt)
VALUES
('FIT2032', 4, 'Chief Examiner(s)'),
('FIT3045', 4, 'Chief Examiner(s)'),
('FIT3045', 5, 'Unit Coordinator(s)'),
('FIT1045', 8, 'Chief Examiner(s)'),
('FIT1045', 9, 'Unit Coordinator(s)'),
('FIT1048', 10, 'Chief Examiner(s)'),
('FIT3155', 11, 'Chief Examiner(s)'),
('FIT3155', 12, 'Unit Coordinator(s)'),
('FIT3161', 1, 'Chief Examiner(s)'),
('FIT3161', 13, 'Unit Coordinator(s)'),
('FIT3162', 1, 'Chief Examiner(s)'),
('FIT3162', 3, 'Unit Coordinator(s)');

INSERT INTO unit_locations(locationId, unitCode)
VALUES
(1, 'FIT3162'),
(3, 'FIT3162'),
(1, 'FIT3161'),
(3, 'FIT3161'),
(1, 'FIT3045'),
(3, 'FIT3045'),
(1, 'FIT2032'),
(1, 'FIT1048'),
(1, 'FIT1045'),
(3, 'FIT1045'),
(1, 'FIT3155'),
(3, 'FIT3155');

INSERT INTO unit_teaching_periods(tpId, unitCode)
VALUES
(1, 'FIT3162'),
(2, 'FIT3162'),
(3, 'FIT3162'),
(1, 'FIT3161'),
(2, 'FIT3161'),
(1, 'FIT3045'),
(2, 'FIT3045'),
(1, 'FIT2032'),
(2, 'FIT2032'),
(2, 'FIT1048'),
(1, 'FIT1045'),
(2, 'FIT1045'),
(1, 'FIT3155'),
(2, 'FIT3155');

-- INSERT INTO unit_prohibitions (unitCode, prohUnitCode)
-- VALUES
-- ('FIT3161', 'FIT3144'),
-- ('FIT3162', 'FIT3144'),
-- ('FIT3045', 'BUS3000'),
-- ('FIT2032', 'BUS2000'),
-- ('FIT1045', 'FIT1053'),
-- ('FIT1045', 'FIT1029'),
-- ('FIT1048', 'FIT2071');

/*Currently no data to add to co_requisites table*/

INSERT INTO unit_prerequisites (unitCode, preReqUnitCode)
VALUES
-- ('FIT3155', 'FIT2004'),
-- ('FIT3161', 'FIT2004'),
('FIT3162', 'FIT3161');
-- ('FIT1045', 'MTH1010');

/*ignoring enrolment rules for FIT3045 and FIT2032 for now because too complicated*/