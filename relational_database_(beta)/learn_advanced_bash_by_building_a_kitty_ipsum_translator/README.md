# Learn advanced bash by building Kitty Ipsum translator

~~~console
stdout (standard out) for when a command is successful
stderr (standard error) for when it’s not.
stdin (standard in) is the third thing commands can use and is for getting input
~~~

## Redirect with >
~~~bash
echo hello bash > stdout.txt
# it create a stdout.txt file with "hello bash" in it
> stdout.txt
# it create a stdout.txt file empty
~~~

## Redirect with >> it will append
~~~bash
echo hello bash >> stdout.txt
# if we use this after the first command (with only one ">")
# it will append another "hello bash" below the first one
~~~

## Redirect to stderr with 2>
~~~bash
bad_command 2> stderr.txt
# as it's a non existing command, it will print
# bash: bad_command: command not found into the stderr.txt file
~~~

## Redirect to stdout with 1>
~~~bash
echo hello bash 1> stdout.txt
# it will print hello bash in the stdout.txt file
~~~

## stdin
~~~bash
read NAME
>aitor
echo $NAME.
# will print aitor
~~~

## VAR to stdout.txt
~~~bash
echo $NAME > stdout.txt
# print aitor into stdout.txt
~~~

<code>Like you can redirect output, you can redirect stdin</code>

~~~bash
# name.txt has 'menta' in it
read NAME < name.txt
# once we run this command, now $NAME will be menta, not aitor
~~~

## | pipe
~~~bash
echo aitor | read NAME
# it will not change the value of $NAME, still be menta
~~~

## cat
~~~bash
cat name.txt
# print menta
cat < name.txt
# print menta
echo aitor | cat
# print aitor
cat kitty_ipsum_1.txt
# print everything that it's in that file
~~~

## touch
~~~bash
# create a file
touch script.sh
# create a script.sh file
~~~

~~~sh
## script.sh file
#!/bin/bash

read NAME

echo Hello $NAME
bad_command
~~~

~~~bash
echo aitor | ./script.sh
#print Hello aitor
~~~

## wc (word count)
~~~bash
man wc
#print newline, word, and byte counts for each file
~~~

~~~bash
wc kitty_ipsum_1.txt
#return 27  332 1744 kitty_ipsum_1.txt
~~~

## wc -l
<code> -l -> how many lines are in the file </code>

~~~bash
wc -l kitty_ipsum_1.txt
#return 27 kitty_ipsum_1.txt
~~~

## wc -w
<code> -w -> how many words are in the file </code>

~~~bash
wc -w kitty_ipsum_1.txt
#return 332 kitty_ipsum_1.txt
~~~

## wc -m
<code> -m -> how many characters are in the file </code>

~~~bash
wc -m kitty_ipsum_1.txt
#return 1738 kitty_ipsum_1.txt
~~~

~~~bash
cat kitty_ipsum_1.txt | wc
#return  27     332    1744
~~~

~~~bash
wc < kitty_ipsum_1.txt
#return 27  332 1744
~~~

~~~bash
echo "~~ kitty_ipsum_1.txt info ~~" > kitty_info.txt
echo -e "\nNumber of lines:" >> kitty_info.txt
cat kitty_ipsum_1.txt | wc -l >> kitty_info.txt
echo -e "\nNumber of words:" >> kitty_info.txt
cat kitty_ipsum_1.txt | wc -w >> kitty_info.txt
echo -e "\nNumber of characters:" >> kitty_info.txt
wc -m < kitty_ipsum_1.txt >> kitty_info.txt

# one by one will create this structure of info in the kitty_info.txt
~~ kitty_ipsum_1.txt info ~~

Number of lines:
27

Number of words:
332

Number of characters:
1738
~~~

## grep for searching patterns
~~~bash
grep 'meow' kitty_ipsum_1.txt

#return all the lines with 'meow'
hide from vacuum cleaner meow for catnip and act crazy steal
shirt howl or gimme attention meow bye and eat grass, meow, and
i stare at it i meow at it i do a wiggle come here birdy ears
eat sniff catnip meow meowzer. good morning sunshine. lick human chase
the pig around the house meow run in circles. always ensure to
~~~

<code> --color flag </code>

~~~bash
grep --color 'meow' kitty_ipsum_1.txt
#will return the same text, but with all the 'meow' in red
~~~

<code> --n flag </code>

~~~bash
grep --color -n 'meow' kitty_ipsum_1.txt
#will return the same text, but with all the 'meow' in red and the line numbers

1:hide from vacuum cleaner meow for catnip and act crazy steal
4:shirt howl or gimme attention meow bye and eat grass, meow, and
10:i stare at it i meow at it i do a wiggle come here birdy ears
22:eat sniff catnip meow meowzer. good morning sunshine. lick human chase
23:the pig around the house meow run in circles. always ensure to
~~~

<code> grep can use regular expressions too </code>

~~~bash
grep --color -n 'meow[a-z]*' kitty_ipsum_1.txt
~~~

<code> -c flag </code>

~~~bash
grep -c 'meow[a-z]*' kitty_ipsum_1.txt 
#will return a count
~~~

<code> -o flag </code>

~~~bash
grep -o 'meow[a-z]*' kitty_ipsum_1.txt 
#return matches on their own lines
meow
meow
meow
meow
meow
meowzer
meow
~~~

<code> wc -l </code>

~~~bash
grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l
#return the lines
7
~~~

~~~bash
grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l >> kitty_info.txt
#add 7 to kitty_info.txt file
~~~

## sed command for replacing text

~~~bash
#sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>
cat name.txt
>mentars
sed 's/r/2/' name.txt
>menta22
~~~

<code>You can add regex flags after the last / in the sed argument. A g, for global, would replace all instances of a matched pattern, or an i to ignore the case of the pattern.</code>

~~~bash
sed 's/freecodecamp/f233C0d3C@mp/i' name.txt
>f233C0d3C@mp
~~~

~~~bash
grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'
#replaces all 0-9 numbers to 1 in terminal
#-n flag gave us the numbers
1:hide from vacuum cleaner meow for catnip and act crazy steal
1:shirt howl or gimme attention meow bye and eat grass, meow, and
10:i stare at it i meow at it i do a wiggle come here birdy ears
12:eat sniff catnip meow meowzer. good morning sunshine. lick human chase
13:the pig around the house meow run in circles. always ensure to
~~~

<code>-E flag to use extended regular expressions</code>

~~~bash
grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/[0-9]+/1/'
#it replaced all the numbers to 1 (if it includes 1, like 10-19 it changes to 1 too)
1:hide from vacuum cleaner meow for catnip and act crazy steal
1:shirt howl or gimme attention meow bye and eat grass, meow, and
1:i stare at it i meow at it i do a wiggle come here birdy ears
1:eat sniff catnip meow meowzer. good morning sunshine. lick human chase
1:the pig around the house meow run in circles. always ensure to
~~~

~~~bash
grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'
#it captures the numbers and replaces everything with the captured numbers
1
4
10
22
23
~~~

~~~bash
grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt 
#adding the numbers to kitty_info.txt
~~~

~~~bash
grep -o 'cat[a-z]*' kitty_ipsum_1.txt
catnip
cat
catnip
cats
cat
catnip
cat
~~~

~~~bash
grep -o 'cat[a-z]*' kitty_ipsum_1.txt | wc -l
7
~~~

~~~bash
grep -n 'cat[a-z]*' kitty_ipsum_1.txt 
1:hide from vacuum cleaner meow for catnip and act crazy steal
3:vacuum cleaner. lick owner’s face while cat sleeps on a black
7:trip on catnip good morning sunshine. this human feeds me, i
17:foot. we are 3 small cats sleeping most of our time, we are
21:owner because nose is wet cat. leave hair everywhere give me attention
22:eat sniff catnip meow meowzer. good morning sunshine. lick human chase
26:of cat food so am in trouble, roll over, too cute for human to get
~~~

~~~bash
grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'
1
3
7
17
21
22
26
~~~

~~~bash
wc -w < kitty_ipsum_2.txt >> kitty_info.txt 
#add 307 (number of words) into kitty_info.txt - kitty_ipsum_2.txt section (line 42)

wc -m < kitty_ipsum_2.txt >> kitty_info.txt
#add 1678 (number of characters) into kitty_info.txt - kitty_ipsum_2.txt section (line 45)

grep -o 'meow[a-z]*' kitty_ipsum_2.txt | wc -l >> kitty_info.txt
#add 9 (ammount of times meow or meowzer appear in text) into kitty_info.txt 
#kitty_ipsum_2.txt section (line 48)

grep -n 'meow[a-z]*' kitty_ipsum_2.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt
#lines they appear on (section 50 to 57)
~~~

## diff command to view differences

~~~bash
diff kitty_ipsum_1.txt doggy_ipsum_1.txt 

1c1
< hide from vacuum cleaner meow for catnip and act crazy steal
---
> hide from vacuum cleaner woof for dogchow and act crazy steal
3,4c3,4
< vacuum cleaner. lick owner’s face while cat sleeps on a black
< shirt howl or gimme attention meow bye and eat grass, meow, and
---
> vacuum cleaner. lick owner’s face while dog sleeps on a black
> shirt howl or gimme attention woof bye and eat grass, woof, and
7c7
#[...]
~~~

<code>You can use diff --color too</code>