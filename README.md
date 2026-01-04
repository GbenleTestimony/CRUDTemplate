My first work using node as a server for some authorization. no bcrypt, passwords were stored directly, i had some troubles with the frontend not receiving JSON format of data. solved by the line:
require('dotenv').config({quiet: true}) in the server.js file.
learnt the structure of an ideal backend. 
NB: bcryptjs was actually installed
and yeah, pm2 is also installed for keeping the server running.
Okay, Weldone Inioluwa.
