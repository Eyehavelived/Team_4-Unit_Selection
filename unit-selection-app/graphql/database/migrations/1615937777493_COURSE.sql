CREATE TABLE IF NOT EXISTS {}.course (
    courseCode CHAR(5) NOT NULL PRIMARY KEY,
    courseName VARCHAR(100) NOT NULL,
    facultyId INT(12) NOT NULL,
    firstYearCredit INT(3) DEFAULT 0,
    secondYearCredit INT(3) DEFAULT 0,
    thirdYearCredit INT(3) DEFAULT 0,
    CONSTRAINT fk_cfaculty FOREIGN KEY(facultyId)
    REFERENCES faculty(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)