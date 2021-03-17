CREATE TABLE IF NOT EXISTS {}.course (
    courseCode CHAR(5) NOT NULL PRIMARY KEY,
    courseName VARCHAR(100) NOT NULL,
    facultyId INT(12) NOT NULL,
    firstYearCredit INT(3) NOT NULL,
    secondYearCredit INT(3) NOT NULL,
    thirdYearCredit INT(3) NOT NULL,
    CONSTRAINT fk_cfaculty FOREIGN KEY(facultyId)
    REFERENCES faculty(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)