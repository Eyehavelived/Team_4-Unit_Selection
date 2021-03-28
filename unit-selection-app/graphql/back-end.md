# Back End Development
## For Windows
Ensure you have MySQL installed on Windows, with MySQL Shell.

### Using MySQL Shell
By default, MySQL Shell will be in JS mode. Change to sql mode with `\sql`

Before you can use MySQL, you also need to establish a connection. For localhost, we will be using user=`root`, pw=`dwaseq`
To do so, run
```
\connect root@localhost
```
After this, you can see all the databases on your local machine with
```
show databases;
```

To select a specific database to use, the command is `use database_name_here`
In our case, the database name is `react_unit_selection_app` so to view it, you should enter.
```
use react_unit_selection_app
```

###
General database commands in case you need them.

#### Delete the database
```
DROP DATABASE react_unit_selection_app;
```

#### Create database
```
CREATE DATABASE react_unit_selection_app;
```

#### Show
To see all databases available to you
```
SHOW DATABASE;
```

To see all tables in the current database
```
SHOW TABLES;
```

#### Select database to use
```
USE react_unit_selection_app;
```

#### Select all from table
```
SELECT * FROM unit;
```
...and the rest you should know how to do.

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
UNIT_PROHIBITIONS
UNIT_COREQUISITES
UNIT_PREREQUISITES
```
For example, the `UNIT` table has attributes `facultyId` and `degreeTypeId`, and as such has `FACULTY` and `DEGREE_TYPE` as its dependencies. Hence, the migration tables for `FACULTY` and `DEGREE_TYPE` must be created BEFORE `UNIT`.

To create a migration for a table run
```
npm run create-migration -- --tableName=yourTableNameHere
```

## Creating Seeds
Using the `create-migration` command, create another migration, but with the name `seeds`, or something more descriptive to match any modifications your migration makes to the db. 

## Installation and Running Migrations
When first installing the workspace on your machine, you will need to run a db-migration to create and populate the database on your local workspace.

## API Development
Queries to mysql is handled through Knex, with the full documentation accessible at http://knexjs.org/
