## RUN SCRIPTS in terminal

~~~bash
sh questionnaire.sh
bash questionnaire.sh 
./questionnaire.sh 
~~~

## WHERE IS BASH LOCATED /usr/bin/bash
<code>which bash</code>

## SHEBANG -tell the program to use it- add at the top of the script
~~~
#!/bin/bash
~~~

## Run the script:
<code>./questionnaire.sh</code>

~~~
ls -l to see permissions
chmod +x questionnaire.sh to add execute
~~~

## Take an input from console
~~~
read NAME
~~~

## Display a variable $NAME in terminal
~~~
echo Hello $NAME.
~~~

--- 

## man command (stands for manual)
~~~ 
man echo 
~~~

## new line
~~~ 
"\n"
~~~ 
<code>echo -e  "\nHello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!"</code>

## comment in bash script
~~~
##this is a comment
~~~

---

## IF in bash
~~~
IF in bash
if [[ $1 == arg1 ]]
then
  echo true
fi
~~~

## IF ELSE
~~~
if [[ $1 == arg1 ]]
then
  echo true
  else
 echo false
fi
~~~

## Operators
~~~
instead of < > <= >= 
in bash -eq (equal), -ne (not equal), -lt (less than), -le (less than or equal), -gt (greater than), -ge (greater than or equal)
~~~

~~~
#1 you can type [[ 4 -ge 5 ]] in bash terminal <br>
#2 but to see the result, after the first command #1 you need to type again (after the first one) an echo $? <br>
#3 or all in one liner: [[ 4 -ge 5 ]]; echo $? <br>
it will print 0 or 1 (true or false) - Opposite to javascript, for example <br><br>
~~~

~~~
bad_command; echo $? -> result command not found
ls; echo $? -> 0 (true)
[[ -a countdown.sh ]]; echo $? -> 0 (true)
~~~

## Expressions
~~~
( EXPRESSION )    Returns the value of EXPRESSION
! EXPRESSION      True if EXPRESSION is false; else false
EXPR1 && EXPR2    True if both EXPR1 and EXPR2 are true; else false
EXPR1 || EXPR2    True if either EXPR1 or EXPR2 is true; else false

e.g:
[[ -x countdown.sh && 5 -le 4 ]]; echo $?
[[ -x countdown.sh || 5 -le 4 ]]; echo $?
~~~

## FOR in bash
~~~sh
for (( i = 10; i > 0; i-- ))
do
  echo $i
done
~~~

~~~sh
## will print numbers from 10 to 0
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i > 0; i-- ))
  do
    echo $i
  done
else
  echo Include a positive integer as the first argument.
fi
~~~

## Sleep command -> sleep 1 will show every number after 1 sec (sleep 3 after 3, etc)
~~~sh
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i > 0; i-- ))
  do
    echo $i
    sleep 1
  done
else
  echo Include a positive integer as the first argument.
fi
~~~

## MULTILINE COMMENT in bash:
~~~
: '
  comment here
  more comment here
'
~~~

<code>e.g.</code>

~~~sh
if [[ $1 -gt 0 ]]
then
: '
  for (( i = $1; i >= 0; i-- ))
  do
    echo $i
    sleep 1
  done
'
else
  echo Include a positive integer as the first argument.
fi
~~~

## WHILE in bash:
~~~sh
while [[ CONDITION ]]
do
  STATEMENTS
done
~~~

<code>e.g.</code>

~~~sh
if [[ $1 -gt 0 ]]
then
I=$1
while [[ $I -ge 0 ]]
do
  echo $I
done
else
  echo Include a positive integer as the first argument.
fi
~~~

### (( I-- )) : Substractor
~~~sh
if [[ $1 -gt 0 ]]
then
I=$1
while [[ $I -ge 0 ]]
do
  echo $I
  (( I-- ))
done
else
  echo Include a positive integer as the first argument.
fi
~~~

---

## View shell variables in terminal
~~~
type printenv 
~~~

<code>e.g.</code>

~~~sh
echo $LANG will print in terminal -> en_US.UTF-8
echo $RANDOM will print in terminal a number between 0 and 32767
~~~

### Declare variables with declare -p (p stands for print)
~~~
declare -p 
~~~

## Operators in terminal (not script)
~~~sh
I = 0
(( I++ ))
(( I += 10 ))
~~~

## With a $ before, it will just do the operation without saving to the variable
<code>(( ... )) will perform a calculation or operation and output nothing. $(( ... )) will replace the calculation with the result of it </code>

~~~sh
$(( I +4 ))
echo $(( I + 4 )) -> will print 15

J=$(( I-6))
echo $J -> will print 6 (11[I]-6)
echo $(( J * 5 + 25)) -> print 50
~~~

~~~
declare -p J 
will print -- J="5"
~~~

~~~
echo $(( RANDOM % 75 ))
will print a number between 0 and 74
~~~

## ARRAY
<code>In terminal: </code>

~~~
ARR =("a" "b" "c")
~~~

<code>to check in terminal:</code>

~~~console
echo ${ARR[1]} 
will print "b"
~~~

<code>to print all:</code>

~~~sh
echo ${ARR[@]} 
will print a b c

declare -p ARR 
will print declare -a ARR=([0]="a" [1]="b" [2]="c")
~~~

### UNTIL loop (similar to a while)
~~~
until [[ CONDITION ]]
do
  STATEMENTS
done
~~~

### "again" after a function call
<code>will call it again until pass the arg.</code>

~~~
until [[ $QUESTION =~ \?$ ]]
do
  GET_FORTUNE again
done
~~~

### Operator == | if it's the same
~~~
[[ hello == hello ]]; echo $? 0 if it's true or 1 if it's false
~~~

### Operator =~ | if it contains
~~~
[[ hello =~ el ]]; echo $? 
0 if it's true or 1 if it's false
[[ "hello world" =~ "lo wor" ]]; echo $? 
0 if it's true or 1 if it's false
~~~

### Starts with a letter 
<code>^h</code>

~~~
e.g. if hello world starts with a h
[[ "hello world" =~ ^h ]]; echo $?
~~~

### Starts with a letter and has another letter after it and ends with a d 
<code>^x.+y$</code>

~~~
e.g. starts with h has another word after it that ends with d
[[ "hello world" =~ ^h.+d$ ]]; echo $?
~~~

### Ends with a "?"
<code>\?$ </code>

~~~
[[ test? =~ \?$ ]]; echo $?
~~~