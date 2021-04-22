title: Generate fake data in Node.js using Faker.js library
layout: page

# Welcome to Generation of Fake Data using Faker.js in Node.js

The code in this page repository will allow you to automatically generate Fake Data using Faker.js in Node.js. It then will save it to your local MongoDB and display the results on a webpage.
Feel free to use the code as a template for your code.

## Table of Content

- [Folder Structure](#Folder-Structure)
- [How the project will run](#How-the-project-will-run)
- [Setting up the application starting point](#Setting-up-the-application-starting point)
- [Setting up views](#Setting-up-views)
- [Setting up models](#Setting-up-models)
- [Run the project](#Run-the-project)

### Folder Structure

The folder structure will be as shown below:

> Fakedata (Root Directory)
>
> > node_modules (folder)
> >
> > models (folder)
> > > user.js (file)
> >
> > views (folder)
> > > home.ejs (file)
> >
> >
> > app.js (file)
> > 

### How the project will run

The code when executed will use the faker.js library to generate the data needed several times. It will store each value generated in a local database. We shall then see the results in a web browser as a webpage from the database.

### Clone the repository

Clone this repository on your machine.

### Install the dependencies

The node libraries required for this tutorial include:

- nodemon
- express
- ejs
- mongoose
- faker

In the integrated terminal, run the following command to install the above packages all at once:

`
npm i nodemon express ejs mongoose faker
`
#### Configuring package.json

Now open the "package.json" file and configure it so that you can start the application using nodemon. Under the scripts, add the "dev" and "start" configurations. The code should look as follows:

```json
{
    "name": "fakedata",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
        "ejs": "^2.7.4",
        "express": "^4.17.1",
        "faker": "^4.1.0",
        "mongoose": "^5.12.5",
        "nodemon": "^2.0.7"
    }
}
```

### Run the project

Before running the code, make sure that MongoDB is running in the background.

In your integrated terminal, run the following command:
`
nodemon run dev
`

## Output
![Main Webpage](fakedata-home.ejs-webpage.png?raw=true "Results Webpage")

And that is all!
Feel free to contribute to the repository as you see well...

_Author: **JustusMbuvi**_
