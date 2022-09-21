## Connection for the project

<code>
psql --username=freecodecamp dbname=postgres -> postgres
</code>

---

## Basic usage
<code>\l</code> -> check the databases <br>
<code>\c name_database;</code> -> connect to DDBB<br>
<code>\d</code> -> display tables of the DDBB<br>
<code>\d name_table;</code> -> display table info.<br>
<code>\q</code> -> quit conexion to a database 

---

## CREATE Database
```sql
CREATE DATABASE name_database; 
```

## CREATE Table
```sql
CREATE TABLE table_name();
```

#### With a SERIAL and a PRIMARY KEY
```sql
CREATE TABLE sounds(sound_id SERIAL PRIMARY KEY);
```

## DROP Table
```sql
DROP TABLE second_table;
```

## RENAME Table
```sql
ALTER DATABASE first_database RENAME TO mario_database;
```
---

### Datatypes
<code>
INT, VARCHAR(30), NUMERIC(4,1), BOOLEAN, TEXT ...
</code>

---

## ALTER TABLE - ADD COLUMN
```sql
ALTER TABLE second_table ADD COLUMN "id" INT;
```

```sql
ALTER TABLE more_info ADD COLUMN weight NUMERIC(4, 1);
```

## ALTER TABLE - DROP COLUMN
```sql
ALTER TABLE second_table DROP COLUMN "age";
```

## ALTER TABLE - RENAME COLUMN
```sql
ALTER TABLE second_table RENAME COLUMN name to username;
ALTER TABLE more_info RENAME COLUMN height TO height_in_cm;
ALTER TABLE more_info RENAME COLUMN weight TO weight_in_kg;
```

---

## INSERT
```sql
INSERT INTO second_table(id, username) VALUES(1, 'Samus');
```
#### MULTIPLE INSERTS
```sql
INSERT INTO characters(name, homeland, favorite_color) VALUES('Toadstool', 'Mushroom Kingdom', 'Red'),
('Bowser', 'Mushroom Kingdom', 'Green');
INSERT INTO character_actions(character_id, action_id) VALUES(7, 1), (7, 2), (7, 3);
INSERT INTO sounds(filename, character_id) VALUES('its-a-me.wav', 1);
```

---

## SELECT
```sql
SELECT * FROM second_table;
SELECT character_id FROM characters;
SELECT character_id, name FROM characters;
SELECT * FROM characters ORDER BY character_id;
```

#### ORDER BY
```sql
SELECT * FROM characters ORDER BY character_id;
```

## UPDATE
```sql
UPDATE characters SET favorite_color='Orange' WHERE name='Daisy'; -> Update a VALUE
UPDATE characters SET name='Toad' WHERE favorite_color='Red';
UPDATE characters SET favorite_color='Blue' WHERE character_id=4;
UPDATE characters SET favorite_color='Blue' WHERE name='Toad';
UPDATE characters SET favorite_color='Yellow' WHERE character_id=5;
```

## DELETE
```sql
DELETE FROM second_table WHERE username='Luigi';
DELETE FROM characters WHERE character id=9;
```

---

## PRIMARY KEY
#### CREATING A TABLE WITH A PK
```sql
ADD TABLE characters ADD PRIMARY KEY(name);
```
#### ALTER A TABLE CREATED
```sql
ALTER TABLE more_info ADD PRIMARY KEY(more_info_id);
```
#### COMPOSITE PRIMARY KEY
```sql
ALTER TABLE character_actions ADD PRIMARY KEY(character_id, action_id);
```

## DROP A CONSTRAINT
```sql
ALTER TABLE characters DROP CONSTRAINT characters_pkey;
```

## FOREIGN KEY
```sql
ALTER TABLE more_info ADD COLUMN character_id INT REFERENCES characters(character_id);
ALTER TABLE character_actions ADD FOREIGN KEY(character_id) REFERENCES characters(character_id);
ALTER TABLE character_actions ADD FOREIGN KEY(action_id) REFERENCES actions(action_id);
ALTER TABLE sounds ADD COLUMN character_id INT NOT NULL REFERENCES characters(character_id);
```

## UNIQUE
```sql
ALTER TABLE more_info ADD UNIQUE(character_id);
```

## NOT NULL
```sql
ALTER TABLE more_info ALTER COLUMN character_id SET NOT NULL;
```

<code>
ALTER TABLE sounds ADD COLUMN filename VARCHAR(40) NOT NULL UNIQUE;
</code><br><br>

## JOIN
```sql
SELECT * FROM characters FULL JOIN more_info ON characters.character_id = more_info.character_id;
SELECT * FROM characters FULL JOIN sounds ON characters.character_id = sounds.character_id;
SELECT * FROM character_actions FULL JOIN characters ON character_actions.character_id = characters.character_id FULL JOIN actions ON character_actions.action_id = actions.action_id;
```

---