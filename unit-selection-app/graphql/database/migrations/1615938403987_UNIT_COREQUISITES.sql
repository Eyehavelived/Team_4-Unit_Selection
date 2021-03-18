CREATE TABLE IF NOT EXISTS {}.unit_corequisites (
    unitCode CHAR(7) NOT NULL,
    coReqUnitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, coReqUnitCode),
    CONSTRAINT fk_ucunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_uccorequnit FOREIGN KEY (coReqUnitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)