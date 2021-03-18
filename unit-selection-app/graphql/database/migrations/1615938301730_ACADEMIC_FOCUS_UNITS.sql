CREATE TABLE IF NOT EXISTS {}.academic_focus_units (
    mmId INT(5) NOT NULL,
    unitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, mmId),
    CONSTRAINT fk_afuunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_afuacademicfocus FOREIGN KEY (mmId)
    REFERENCES academic_focus(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)