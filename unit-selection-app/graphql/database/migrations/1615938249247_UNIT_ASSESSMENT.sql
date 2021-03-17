CREATE TABLE IF NOT EXISTS {}.unit_assessment (
    id INT(5) NOT NULL,
    courseCode CHAR(5) NOT NULL,
    UNIQUE KEY(courseCode, id),
    assDesc VARCHAR(30),
    assPerc DECIMAL(3, 2),
    CONSTRAINT fk_uacourse FOREIGN KEY (courseCode)
    REFERENCES course(courseCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)