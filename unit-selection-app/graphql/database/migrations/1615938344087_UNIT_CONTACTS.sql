CREATE TABLE IF NOT EXISTS {}.unit_contacts (
    unitCode CHAR(7) NOT NULL,
    staffId INT(12) NOT NULL,
    contactAppt VARCHAR(30) NOT NULL,
    UNIQUE KEY(unitCode, staffId),
    CONSTRAINT fk_usconunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_usconstaff FOREIGN KEY (staffId)
    REFERENCES staff(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)