# Learn nano by building a castle

## First steps

~~~console
mkdir sql_reference
cd sql_reference
git init
ls -a
git status
git checkout -b main
touch README.md
git add README.md
touch sql_reference.json
git add sql_reference.json
git commit -m "Initial commit"
git log
git commit -m "feat: add create database reference"
git branch feat/add-create-table-reference
git branch
git checkout feat/add-create-table-reference
git merge feat/add-create-table-reference
git checkout -b feat/add-column-references
~~~

---

## git init
<code>Create a new git repository</code><br>

---

## git status
<code>Check status of changes</code><br>

---

## git branch
<code>Check branches</code><br>

### Flags
<code>-- git branch -d < branch ></code><br>
<code>Delete a branch</code>

~~~bash
Deleted branch feat/add-create-table-reference (was 25bef2e).
~~~

<code>-- git branch -b < branch ></code><br>
<code>Creates the branch and changes it</code>

---

## git checkout -m < branch >
<code>Navigate to a new branch</code><br>

---

## git commit -m "< message >"
<code>Commit comment</code><br>
<code>
Commit messages often start with fix: or feat:, among others, to help people understand what your commit was for.</code><br>

~~~bash
commit 8320c5739f9da27d88834da1727434a134338ac8 (HEAD -> main)
~~~

---

## git add < file ><file>
<code>Add changed files</code><br>

### Flags
<code>-- git add .</code><br>
<code>Add all changed files</code>

---

## git log
<code>Check your commit history</code><br>

### Flags
<code>-- git log --oneline</code><br>
<code>Shows log in one line</code>

~~~bash
25bef2e (HEAD -> feat/add-create-table-reference) feat: add create table reference
710bad8 (main) feat: add drop database reference
a5de944 feat: add create database reference
a029be1 Initial commit
~~~

---

## git diff
<code>Check new unstaged changes</code>

~~~bash
@@ -0,0 +1,5 @@
+{
+  "database": {
+    "create": "CREATE DATABASE database_name;"
+  }
+}
~~~

---

## git log
<code>Check your commit history</code>

---

## git merge
<code>-- git merge < branch > </code><br>
<code>bring changes from a branch into the branch you are currently on.</code>

---

## git rebase main
<code>Moves the combining sequence of commits into a new base commit </code><br>

~~~bash
### e.g.
git checkout -b bug-branch
### we change a file now, named fileb.json
git add fileb.json
git commit -m "solved a bug"
git rebase main
git branch -d bug-branch
### it will show the commit we made in the main logs
~~~

### Flags
<code>-- git rebase --continue</code><br>
<code>Continue the rebase if no conflicts</code>

---

## git stash
<code>Stash your changes</code>

### Flags
<code>-- git stash list</code><br>
<code>View things you have stashed </code>

<code>-- git stash pop</code><br>
<code>Bring back changes you stashed </code>

<code>-- git stash show</code><br>
<code>View a condensed version of the changes in the latest stash</code>

<code>-- git stash show -p</code><br>
<code>See what file was changed and how many lines were added and removed from the file.</code><br>
<code>-p stands for "patch"</code><br>

<code>-- git stash show stash@{1}</code><br>
<code>Selecting one that it's not the last stash</code><br>

<code>-- git stash show -p stash@{1}</code><br>
<code>Selecting the oldest</code><br>

<code>-- git stash apply</code><br>
<code>Add the latest stash while keeping it in the list.</code>

<code>-- git stash drop</code><br>
<code>Drop a stash.</code>



---