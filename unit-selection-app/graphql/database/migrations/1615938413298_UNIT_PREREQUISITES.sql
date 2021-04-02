CREATE TABLE IF NOT EXISTS {}.unit_prerequisites (
    unitCode CHAR(7) NOT NULL,
    preReqUnitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, preReqUnitCode),
    CONSTRAINT fk_uprunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_uprprerequnit FOREIGN KEY (preReqUnitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)