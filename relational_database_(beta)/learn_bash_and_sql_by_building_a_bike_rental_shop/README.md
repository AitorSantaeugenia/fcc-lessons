# Learn Bash and SQL by building a bike rental shop

## Conecting to PostgreSQL
~~~console
psql --username=freecodecamp --dbname=postgres
~~~

# Steps done
## Creating the DATABASE

~~~sql
CREATE DATABASE bikes;
\l
\c bikes
CREATE TABLE bikes();
\d
ALTER TABLE bikes ADD COLUMN bike_id SERIAL PRIMARY KEY;
ALTER TABLE bikes ADD COLUMN type VARCHAR(50) NOT NULL;
ALTER TABLE bikes ADD COLUMN size INT NOT NULL;
ALTER TABLE bikes ADD COLUMN available BOOLEAN NOT NULL DEFAULT TRUE;
CREATE TABLE customers();
ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;
ALTER TABLE customers ADD COLUMN phone VARCHAR(15) NOT NULL UNIQUE;
ALTER TABLE customers ADD COLUMN name VARCHAR(40) NOT NULL;
CREATE TABLE rentals();
ALTER TABLE rentals ADD COLUMN rental_id SERIAL PRIMARY KEY;
ALTER TABLE rentals ADD COLUMN customer_id INT NOT NULL;
ALTER TABLE rentals ADD FOREIGN KEY(customer_id) REFERENCES customers(customer_id);
ALTER TABLE rentals ADD COLUMN bike_id INT NOT NULL;
ALTER TABLE rentals ADD FOREIGN KEY(bike_id) REFERENCES bikes(bike_id);
ALTER TABLE rentals ADD COLUMN date_rented DATE NOT NULL DEFAULT NOW();
ALTER TABLE rentals ADD COLUMN date_returned DATE;
INSERT INTO bikes(type, size) VALUES('Mountain', 27);
SELECT * FROM bikes;
INSERT INTO bikes(type, size) VALUES('Mountain', 28);
INSERT INTO bikes(type, size) VALUES('Mountain', 29);
INSERT INTO bikes(type, size) VALUES('Road', 27);
SELECT * FROM bikes;
INSERT INTO bikes(type, size) VALUES('Road', 28), ('Road', 29);
INSERT INTO bikes(type, size) VALUES('BMX', 19),('BMX', 20),('BMX', 21);

-- after working a little bit with the script
UPDATE bikes SET available = false WHERE available = true;
UPDATE bikes SET available = true WHERE type != 'BMX';
UPDATE bikes SET available = true WHERE available = false;
--[...]
SELECT * FROM bikes ORDER BY bike_id;
--[...]
SELECT * FROM bikes LEFT JOIN rentals USING(bike_id);
SELECT * FROM bikes INNER JOIN rentals USING(bike_id);
SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id);
SELECT * FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone='555-5555' AND date_returned IS NULL;
SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone='555-5555' AND date_returned IS NULL;
SELECT bike_id, type, size FROM bikes INNER JOIN rentals USING(bike_id) INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND date_returned IS NULL ORDER BY bike_id;
--[...]
SELECT * FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND bike_id = 1 AND date_returned IS NULL;
SELECT rental_id FROM rentals INNER JOIN customers USING(customer_id) WHERE phone = '555-5555' AND bike_id = 1 AND date_returned IS NULL;
~~~

## Working in the bike-shop.sh

<code>What we type in bash console</code>

~~~bash
touch bike-shop.sh
chmod +x bike-shop.sh
./bike-shop.sh

# later, working with the script
[[ a =~ [0-9] ]]; echo $?
[[ a1 =~ [0-9] ]]; echo $?
[[ a1 =~ ^[0-9]$ ]]; echo $?
[[ 1 =~ ^[0-9]$ ]]; echo $?
[[ 11 =~ ^[0-9]$ ]]; echo $?
[[ 11 =~ ^[0-9]+$ ]]; echo $?
[[ !  11 =~ ^[0-9]+$ ]]; echo $?

# working with the output data of bikes (regex)
echo '28 | Mountain' | sed 's/ /=/g'
echo '28 | Mountain' | sed 's/ //g'
echo '28 | Mountain' | sed 's/ //'
echo '28 | Mountain' | sed 's/ |//'
echo '28 | Mountain' | sed 's/ |/"/'

# working with the output data of user (regex)
echo ' M e '
echo "$(echo ' M e ')."
echo "$(echo ' M e ' | sed 's/ //')."
echo "$(echo ' M e ' | sed 's/ //g')."
echo "$(echo ' M e ' | sed 's/^ //g')."
echo "$(echo '   M e ' | sed 's/^ //g')."
echo "$(echo '   M e ' | sed 's/^ *//g')."
echo "$(echo '   M e ' | sed 's/ $//g')."
echo "$(echo '   M e   ' | sed 's/ $//g')."
echo "$(echo '   M e   ' | sed 's/ *$//g')."
echo "$(echo '   M e   ' | sed 's/^ *| *$//g')."
echo "$(echo '   M e   ' | sed -E 's/^ *| *$//g')."
~~~

<code>What we type in script</code>

View the [script](https://github.com/AitorSantaeugenia/fcc-lessons/blob/master/relational_database_(beta)/learn_bash_and_sql_by_building_a_bike_rental_shop/bike_shop.sh).