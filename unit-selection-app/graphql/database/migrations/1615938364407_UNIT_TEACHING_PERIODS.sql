CREATE TABLE IF NOT EXISTS {}.unit_teaching_periods (
    tpId INT(2) NOT NULL,
    unitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, mmId),
    CONSTRAINT fk_utpunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_utpperiod FOREIGN KEY (tpId)
    REFERENCES teaching_period(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)