Folder Structure of Cypress
---------------------------

- download
- e2e - This is a folder all UI and API Test Cases
- fixture - Reading the data from this folder, contain XLSX, CSV, JSON
- support - command.js - Customized Command
          - e2e.js - Handling all the dependency

Understanding Github and Git
----------------------------

Create your account - https://github.com/
Install Git - https://git-scm.com/

Setup your username - https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html

git config --global user.name "Sam Smith"
git config --global user.email sam@example.com


Locator
-------

//Cypress - CSS Selector

// //With help of classname
// --> CSS Selector - .classname
// //With the help of id
// --> ID - #id
// //With the help of attribute name and value
// --> [attributename='attributevalue']
// //With the help of tagname and classname
// --> tagname.classname
// //With the help of tagname and id
// --> tagname#id
// //With the help of tagname and attribute name and value
// --> tagname[attributename='attributevalue']
// //With the help of tagname, attribute name and value and classname
// --> tagname[attributename='attributevalue'].classname
// //With the help of tagname, attribute name and value and id
// --> tagname[attributename='attributevalue']#id


