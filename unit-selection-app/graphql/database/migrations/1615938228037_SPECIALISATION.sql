CREATE TABLE IF NOT EXISTS {}.specialisation (
    id INT(5) NOT NULL auto_increment PRIMARY KEY,
    courseCode CHAR(5) NOT NULL,
    specName VARCHAR(30),
    CONSTRAINT fk_scourse FOREIGN KEY(courseCode)
    REFERENCES course(courseCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)