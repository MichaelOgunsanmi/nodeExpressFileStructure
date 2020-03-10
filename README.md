    **
    Author: "Michael Ogunsanmi"
    
    
    Author's Contact: 
        Email: "ogunsanmimichael@gmail.com"
        LinkedIn: "linkedin.com/in/michaelogunsanmi"
        Github: "github.com/michaelogunsanmi"
    
    
    Introduction
    The aim of this package is to create a folder structure for your node-express applications following the MVC architecture. The 
    structural choices made for this package have been based on my experience developing node-express applications and are
    open to reviews and alterations. Below represent some actions to be carried out for each package with suggestions made 
    for each folder and file. 
    
    
                                                **** ACTIONS ****
    1. Initialize git with "git init" to add git to project.
    2. Install express with "npm install express".
    3. Create a .gitignore file.
    3. Create a .env file and check this into .gitignore.
    
    
                                        ##### CONFIGURATION FOR "PACKAGE.JSON" FILE FOLDER #####
    1. Install the nodemon package as a development dependency using "npm install nodemon --save-dev"
    2. Edit the following fields to suit your needs
          "name": ,
          "version": ,
          "description": ,
          "keywords": [],
          "author": {
            "name": ,
            "email": 
          },
          "license":
    3. Add more fields as required to the package.json file
    4. Add more scripts as required. 
    
    
                                        ##### CONFIGURATION FOR ".ENV" FILE FOLDER #####
    1. Set the NODE_ENV via the command line using either the SET or EXPORT keyword as defined below
        SET NODE_ENV=production (for production environment)
        EXPORT NODE_ENV=developemnt (for development environment)
    2. Install the dotenv package using "npm install dotenv"
    3. In the .env file created, set the PORT number and other environment variables using the format below
        PORT=5000
        EXAMPLE_ENVIRONMENT_VARIABLE=EXAMPLE_ENVIRONMENT_VALUE
    
    
                                        ##### CONFIGURATION FOR "STARTUP" FOLDER #####
    db.js
    1. npm install winston
    2. npm install mongoose
    3. Set DB connection string in the .env file 
    
    logging.js
    1. npm install winston-mongodb (if you want winston to write log Files to mongodb database. Could cause errors when used
    during testing)
    2. npm install express-async-errors (used for handling errors and logging these errors)
    
    routes.js
    1. register routes and middleware here.
    
    index.js
    1. Add other startup files required for your application by requiring the files containing them from the startup folder.
    Remember here that the order of files being required is very important e.g logging files should come above every other 
    file that requires the logging functionality.
    
    config.js
    1. Add Code to throw Error when specific environmental variables needed for app startup are not provided e.g PORT number
    
    Add other startup files that work as middleware needed in the request response cycle e.g
        validation.js (add middleware required for data validation e.g joi-objectid),
        views.js (add middleware required for view engines e.g middleware for handlebars view engine),
        session.js (add middleware for session management on the server),
        flashMessaging.js (add middleware for flash messaging e.g connect-flash),
        production.js (add production based middleware e.g helmet) e.t.c
    
    
                                        ##### CONFIGURATION FOR "ROUTES" FOLDER #####
    Add routes as necessary. Group routes based on the API end point
    
    
                                        ##### CONFIGURATION FOR "MIDDLEWARES" FOLDER #####
    1. Add middleware necessary for the project e.g authentication.js, maintenance503.js e.t.c. Remember to call next() to 
    allow for continuation of the request-response processing pipeline
    2. error.js catches any error in the request-processing pipeline and uses winston to log these errors.
    
    
                                        ##### CONFIGURATION FOR "MODELS" FOLDER #####
    1. Install mongoose with "npm install mongoose".
    2. Place all utility functions relating to all models in utils.js.
    3. Create a folder for each collection in the database and describe its model in this folder.
    4. Add methods on the model schema to the methods folder.
    5. Add statics on the model schema to the statics folder.
    6. Add pre actions on the model schema to the pre folder.
    7. Add post actions on the model schema to the post folder.
    8. Add other methods closely tied to the model schema to the utils folder.
    
    
                                        ##### CONFIGURATION FOR "VIEWS" FOLDER #####
    1. Add view engine code here and structure the view engine folder as recommended for the view engine chosen. View engines
    could be pug, jade, handlebars, e.t.c
    
    
                                        ##### CONFIGURATION FOR "CONTROLLER" FOLDER #####
    1. Add controller folder for each major API endpoints necessary for the project.
    2. Add controller files containing controller logic for the CRUD action necessary for that particular endPoint
    3. Create an index.js file for each controller folder to export all the controllers from one file.
    
    
                                        ##### CONFIGURATION FOR "PUBLIC" FOLDER #####
    1. Add css based code to css folder and structure the folder according to your css needs.
    2. Add project images to images folder and structure the folder according to your project images structure.
    3. Add client-side javascript code here and structure the folder according to your client-side javascript needs.
    4. Add html pages to the root of this folder e.g index.html, about.html, e.t.c . Note to remove the index.html file when
    using a view engine (e.g handlebars) as it will override the index page for your view engine.
    
    
                                        ##### CONFIGURATION FOR "TESTS" FOLDER #####
    /__mocks__
    1. Mock third-party API calls here i.e API calls for third-party services e.g sending mails, payment services.
    
    /fixtures
    1. Add code that would usually come up in your beforeEach and afterEach calls. Export this code so that they can be 
    available for multiple test suites e.g code to setup and clean a database.
    2. Add other files that might be needed for testing API endpoints e.g photo.jpg needed to test file uploads.
    
    /integration
    1. Add integration tests here and group these tests according to the file structure used in the project e.g middleware 
    folder for integration tests for files in the project's middleware folder.
    
    /unit
    1. Add unit tests here and group these tests according to the file structure used in the project e.g controller 
    folder for unit tests for files in the project's controller folder.  
            
    
                                        ##### CONFIGURATION FOR "README.MD FILE" FOLDER #####
    1. Edit file to describe your project and highlight specific actions to be carried out in running your project.
    
    
                                        ##### CONFIGURATION FOR "SERVER.JS FILE" FOLDER #####
    1. Main entry into your app. The server exported here can be used during testing.
    
    
                                        ##### CONFIGURATION FOR "APP.JS FILE" FOLDER #####
    1. Add other startup files required for your application by requiring the files containing them from the startup folder.
    
    
    Add other files and folders as required for your project.** 
    
    
    
                                        
                                         
                                         