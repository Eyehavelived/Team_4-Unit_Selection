# Back End Development
## Setup
Configurations for the database is store in a .env file. This file is explicitly ignored in the .gitignore file, with the reason being that, when deployed, the .env file on the server would be different from our local variations.

A definite difference would be that the DB user and pass will be stored on Vault and indirectly referenced, so that anyone reading the code cannot easily access the database.
### LocalHost
```
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PASS=dwaseq
MYSQL_DB=react_unit_selection_app
```

### Production
Waiting to be picked up


## Creating Migrations
When creating migrations, it's first necessary to be aware of the dependencies your tables will have on other tables. 

To put it into context, below is a list of the 20 tables initially created for this project, created in descending order.
```
Independant
TEACHING_PERIOD
LOCATION
STAFF
DEGREE_TYPE
FACULTY

Dependant
COURSE
ACADEMIC_FOCUS
SPECIALISATION
UNIT
UNIT_ASSESSMENT
OTHER_REQUISITE

Compound
SPECIALISATION_UNITS
ACADEMIC_FOCUS_UNITS
COURSE_CORE_UNITS
UNIT_CONTACTS
UNIT_LOCATIONS
UNIT_TEACHING_PERIODS
UNIT_PROHIBITION
UNIT_COREQUISITE
UNIT_PREREQUISITE
```
For example, the `UNIT` table has attributes `facultyId` and `degreeTypeId`, and as such has `FACULTY` and `DEGREE_TYPE` as its dependencies. Hence, the migration tables for `FACULTY` and `DEGREE_TYPE` must be created BEFORE `UNIT`.

To create a migration for a table run
```
npm run create-migration -- --tableName=yourTableNameHere
```

## Creating Seeds

## Running Migrations

