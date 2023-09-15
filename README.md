
# Gmail like Mail client

This project uses MERN stack to build a web app that provides features like Sending Email using smtp.js , storing sent email, drafted emails, moving emails to bin , marking email as important and deleting emails.

dependencies used: axios,
smtp.js,
dotenv,
react-router-dom, etc




## Deployment

To deploy this project run\
open two terminals
```bash
  cd client
  npm install
```
```bash
  cd server
  npm install
```
inside client
```bash
 npm run start 
```
inside server
```bash
 nodemon start
```
go to https://elasticemail.com/ and set-up your smtp server, 
generate credentials for the smtp server and make .env file in client
with two enteries-\
REACT_APP_USERNAME= "your smtp username here"
REACT_APP_PASSWORD= "your password here"\
REACT_APP_FROM= "your from email"\
verify your email under domain in elasticemail site which you wish to use to send mails.

go to mongodb and set-up a project \
go to server and create another .env file install this file create \
DB_URL="place your db url here with your username and password" \
for details reffer mongodb docs.

restart both client and server and now you should be able to use th app .