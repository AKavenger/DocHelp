
# DocHelp

A daily medical appointment scheduling web app for the campus hospital, notify doctors about new
appointments, and add professional doctors to the list.


## Features

- Patients can book doctor's appointments from list of doctors
- Live doctor availability check
- Notifications send to doctor for new appointments
- Notification send to patient regarding status of their appointments
- Any user can apply for doctor's profile and verified by admin
- Admin has access to doctor and users list
- Admin can approve and block doctor anytime.


## Tech Stack

**Client:** React, Redux, HTML, CSS, JAVASCRIPT and ANTD 

**Server:** Node, Express, MongoDB, Bcrypt and JWT Tokens


## Installation

### 1. Clone repo

```
$ git clone https://github.com/AKavenger/DocHelp.git
$ cd DocHelp
```

### 2. Create .env File

- create a new .env and add below given environment variables.

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URL=mongodb://localhost/DocHelp
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URL=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ npm install
$ node server.js
```

### 5. Run Frontend

```
# open new terminal
$ cd client
$ npm install
$ npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

`JWT_SECRET=DOCHELP`


## Demo

- 👉 Railways : [https://dochelp-production.up.railway.app/](https://mern-amazona-app.herokuapp.com)


## Support

- Contact me: [Avinash](mailto:avinash.btech.iet@gmail.com)
