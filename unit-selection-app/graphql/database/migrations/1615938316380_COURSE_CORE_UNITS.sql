CREATE TABLE IF NOT EXISTS {}.course_core_units (
    courseCode CHAR(5) NOT NULL,
    unitCode CHAR(7) NOT NULL,
    UNIQUE KEY(courseCode, unitCode),
    CONSTRAINT fk_ccuunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_ccucourse FOREIGN KEY (courseCode)
    REFERENCES course(courseCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)