# PostgreSQL

## Log into the psql interactive terminal

<code>
psql --username=freecodecamp --dbname=postgres
</code>

---

### CSV file with major and course columns
~~~
major,course
Database Administration,Data Structures and Algorithms
Web Development,Web Programming
~~~

## Scipt that shows in terminal all the info in a .csv file

~~~bash
#!/bin/bash
# Script to insert data from courses.csv and students.csv into students database
cat courses.csv
~~~

## this script will print only the majors (not the course)

~~~bash
cat courses.csv | while IFS="," read MAJOR COURSE
do
  echo $MAJOR
done
~~~

<code> output </code>

~~~ console
major
Database Administration
Web Development
Database Administration
Data Science
Network Engineering
Database Administration
Data Science
Network Engineering
Computer Programming
Database Administration
Game Design
Data Science
Computer Programming
System Administration
Game Design
Web Development
~~~

## this script will print both (mayor and course)

~~~bash
cat courses.csv | while IFS="," read MAJOR COURSE
do
  echo $MAJOR $COURSE
done
~~~

<code> output </code>

~~~ console
major course
Database Administration Data Structures and Algorithms
Web Development Web Programming
Database Administration Database Systems
Data Science Data Structures and Algorithms
Network Engineering Computer Networks
Database Administration SQL
Data Science Machine Learning
Network Engineering Computer Systems
Computer Programming Computer Networks
Database Administration Web Applications
Game Design Artificial Intelligence
Data Science Python
~~~

## VAR that log to PSQL
<code>PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"</code>

## Remove all info from tables
<code>TRUNCATE majors, students, majors_courses;</code>

## this will remove all info in majors, courses and majors_courses tables (add in the top of the script)
~~~bash
echo $($PSQL "TRUNCATE students, majors, courses, majors_courses")
~~~

## Dump the work done to a students.sql
<code>pg_dump --clean --create --inserts --username=freecodecamp students > students.sql</code>