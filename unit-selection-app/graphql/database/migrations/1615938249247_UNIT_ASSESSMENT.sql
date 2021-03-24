CREATE TABLE IF NOT EXISTS {}.unit_assessment (
    id INT(5) NOT NULL,
    unitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, id),
    assDesc VARCHAR(30),
    assPerc DECIMAL(3, 2),
    CONSTRAINT fk_uaunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)