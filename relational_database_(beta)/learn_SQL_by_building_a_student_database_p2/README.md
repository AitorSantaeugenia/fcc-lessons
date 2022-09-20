# PostgreSQL learn by building a student DDBB part2

## Log into the psql interactive terminal

<code>
psql --username=freecodecamp --dbname=postgres
</code>
<br><br>

# Multiple queries done in this course

## WHERE usage with operators <, >, AND, ()
~~~bash
SELECT first_name, last_name, gpa FROM students WHERE gpa < 2.5;
SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.8;
SELECT first_name, last_name, gpa FROM students WHERE gpa != 4.0;
SELECT * FROM majors WHERE major = 'Game Design';
SELECT * FROM majors WHERE major != 'Game Design';
SELECT * FROM majors WHERE major > 'Game Design';
SELECT * FROM majors WHERE major >= 'Game Design';
SELECT * FROM majors WHERE major < 'G';
SELECT * FROM students WHERE last_name < 'M';
SELECT * FROM students WHERE last_name < 'M' OR gpa=3.9;
SELECT * FROM students WHERE last_name < 'M' AND gpa=3.9;
SELECT * FROM students WHERE last_name < 'M' AND gpa=3.9 OR gpa<2.3;
SELECT * FROM students WHERE last_name <'M' AND (gpa=3.9 or gpa <2.3);
~~~

## LIKE, NOT LIKE, ILIKE usage
~~~bash
SELECT * FROM courses WHERE course LIKE '_lgorithms';
#-> find 1: "Algorithms"

SELECT * FROM courses WHERE course LIKE '%lgorithms';
#-> find 2: "Data Structures and Algorithms" & "Algorithms"

SELECT * FROM courses WHERE course LIKE 'Web%';
SELECT * FROM courses WHERE course LIKE '_e%';
SELECT * FROM courses WHERE course LIKE '% %';
SELECT * FROM courses WHERE course NOT LIKE '% %';
SELECT * FROM courses WHERE course LIKE '%A%';
SELECT * FROM courses WHERE course ILIKE '%A%'
SELECT * FROM courses WHERE course NOT ILIKE '%A%';
SELECT * FROM courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';
~~~

## IS NULL, IS NOT NULL usage
~~~bash
SELECT * FROM students WHERE gpa IS NULL;
SELECT * FROM students WHERE gpa IS NOT NULL;
SELECT * FROM students WHERE major_id IS NULL;
SELECT * FROM students WHERE major_id IS NULL AND gpa IS NOT NULL;
SELECT * FROM students WHERE major_id IS NULL AND gpa IS NULL;
SELECT * FROM students ORDER BY gpa;
SELECT * FROM students ORDER BY gpa DESC;
SELECT * FROM students ORDER BY gpa DESC, first_name;
SELECT * FROM students ORDER BY gpa DESC, first_name LIMIT 10;
SELECT * FROM students WHERE gpa IS NOT NULL ORDER BY gpa DESC, first_name LIMIT 10;
~~~

## MIN, MAX usage
~~~bash
SELECT min(gpa) FROM students;
SELECT max(gpa) FROM students
~~~

## AVG, SUM usage
~~~bash
SELECT SUM(major_id) FROM students;
SELECT AVG(major_id) FROM students;
~~~

## CEIL, ROUND usage
~~~bash
#ROUND UP
SELECT CEIL(AVG(major_id)) FROM students;
#ROUND DOWN
SELECT ROUND(AVG(major_id)) FROM students;
#MAX DIGITS
SELECT ROUND(AVG(major_id),5) FROM students;
~~~

## COUNT usage
~~~bash
# Count all
SELECT COUNT(*) FROM majors;
SELECT COUNT(*) FROM students;
# Count major_id
SELECT COUNT(major_id) FROM students;
~~~

## DISTINCT usage
~~~bash
SELECT DISTINCT(major_id) FROM students;
~~~

## GROUP BY usage
~~~bash
SELECT major_id FROM students GROUP BY major_id;
SELECT major_id, COUNT(*) FROM students GROUP BY major_id;
SELECT major_id, MIN(gpa) FROM students GROUP BY major_id;
SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id;
~~~

## HAVING usage
~~~bash
SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;
~~~

## AS usage
~~~bash
# Rename a column with AS
SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;
SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) AS max_gpa FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;
SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id;
SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id HAVING COUNT(*) < 8;
~~~

## LEFT, RIGHT, FULL and INNER JOIN usage
~~~bash
# See the name of a FK
SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM majors LEFT JOIN students ON majors.major_id = students.major_id;
SELECT * FROM majors INNER JOIN students ON majors.major_id = students.major_id;
SELECT * FROM majors RIGHT JOIN students ON majors.major_id = students.major_id;
SELECT * FROM majors FULL JOIN students ON majors.major_id = students.major_id;
SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;
SELECT major FROM students INNER JOIN majors ON students.major_id = majors.major_id;
SELECT DISTINCT(major) FROM students INNER JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;
SELECT major FROM students RIGHT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;
SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;
SELECT first_name, last_name, major, gpa FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;
SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;
SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';
SELECT first_name, major FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';
SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;
SELECT students.major_id FROM students FULL JOIN majors ON students.major_id = majors.major_id;
SELECT students.major_id FROM students FULL JOIN majors AS m ON students.major_id = m.major_id;
SELECT s.major_id FROM students AS s FULL JOIN majors AS m ON s.major_id = m.major_id;
SELECT * FROM students FULL JOIN majors USING(major_id);
SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id);
SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses USING(course_id);
~~~












