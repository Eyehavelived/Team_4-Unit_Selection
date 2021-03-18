CREATE TABLE IF NOT EXISTS {}.other_prerequisite (
    id INT(5) NOT NULL,
    unitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, id),
    otherPrereqDesc VARCHAR(300) NOT NULL,
    CONSTRAINT fk_opcourse FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)