CREATE TABLE IF NOT EXISTS {}.specialisation_units (
    specialisationId INT(5) NOT NULL,
    unitCode CHAR(7) NOT NULL,
    UNIQUE KEY(unitCode, specialisationId),
    CONSTRAINT fk_suunit FOREIGN KEY (unitCode)
    REFERENCES unit(unitCode)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    CONSTRAINT fk_suspecialisation FOREIGN KEY (specialisationId)
    REFERENCES specialisation(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
)