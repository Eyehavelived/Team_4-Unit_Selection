CREATE TABLE IF NOT EXISTS {}.unit_prohibitions (
    unitCode CHAR(7) NOT NULL,
    prohUnitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, prohUnitCode),
    CONSTRAINT fk_uphunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_uphprohunit FOREIGN KEY (prohUnitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)