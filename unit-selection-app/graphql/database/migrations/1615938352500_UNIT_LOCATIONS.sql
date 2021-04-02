CREATE TABLE IF NOT EXISTS {}.unit_locations (
    locationId INT(2) NOT NULL,
    unitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, locationId),
    CONSTRAINT fk_ulunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_ullocation FOREIGN KEY (locationId)
    REFERENCES teaching_location(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)