CREATE TABLE IF NOT EXISTS {}.unit (
    unitCode CHAR(7) NOT NULL PRIMARY KEY,
    unitName VARCHAR(30) NOT NULL,
    unitFacultyId INT(12) NOT NULL,
    unitDegreeTypeId INT(1) NOT NULL,
    synopsis VARCHAR(500),
    workloadReq VARCHAR(500),
    isActive BOOL NOT NULL DEFAULT 1,
    CONSTRAINT fk_ufaculty FOREIGN KEY (unitFacultyId)
    REFERENCES faculty(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_udegtype FOREIGN KEY (unitDegreeTypeId)
    REFERENCES degree_type(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)