CREATE TABLE IF NOT EXISTS {}.academic_focus (
    id INT(5) NOT NULL auto_increment PRIMARY KEY,
    courseCode CHAR(5) NOT NULL,
    mmName VARCHAR(30),
    CONSTRAINT fk_mmcourse FOREIGN KEY(courseCode)
    REFERENCES course(courseCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)