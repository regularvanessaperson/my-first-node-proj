## Notes on how to start a project in node
- mkdir (the name of your node project)
- cd (the name of your node project)
- (the name of your project) npm init
    - *or* (the name of your project) npm init -y *to skip the questions*
- ok to click enter to approve all the questions until ready to code

## Instructions on how to create an express app

1. Make new directory and add node 
    - *mkdir node-project*
    - *cd node-project*
    - *touch index.js*
    - *npm init -y*
2. Once inside of directory install express in terminal
    - *npm i express*
3. In terminal add gitignore file to add files that are huge and don't need to be put into github
    -  *touch .gitignore*
    - in folder add name of folder for example: node_modules
4. Initialize empty git repository by using *git init*
5. In the index.js file use require to import the express module then create an instance
    - const express = require("express")
    - const app = express()
6. To create a home route start with function below 
    app.get("/", (req,res)=>{
        res.send("Hello,world!")
        //can send an HTML file to a client
        res.sendFile()
        //allows us to render data and inject (dynamic)
        res.render()
        //used when we create api so we can send back json 
        res.json
    })
    //connects to port 8000
    app.listen(8000, ()=>{
        console.log("You're listening to the smooth sounds of port 8000.")
    }) 

7. run nodemon

### Express Routes
#### Express routes include * get, post, put and delete*
-Routing refers to determining how an application responds to a client to a particular endpoing, whick is a URI(or path) and specific HTTP request method 
(src:https://expressjs.com/en/starter/basic-routing.html)
    - this should respondwith Hello World on the homepage:
        -app.get("/", (req,res)=>{
        res.send("Hello,world! We're playing with routes today :)")
        })
    - app.post should respond to post request on th eroot route
        - app.post("/", (req,res)=>{
            res.send("got a POST request")
        })
    - app.put("/user", (res,req)=>{
        res.send("Got a PUT request at /user")
    })
    -app.delete("/user", (req,res)=>{
        res.send("Got a DELETE request at /user")
    })
## Templates
- To use embeded JavaScript templates install in terminal *npm i ejs*
- Templating with variables means we can pass in an object to res.render() and access the values stored in it as variables inside the ejs template.
- in the layouts.ejs body there sould be the below:
    - <%- body %> 
- in each ejs file a template can be input to what information can be rendered on the page. The below produces the list of foods(whick is a key in the index js or controller js file)
    <ul>
    <% foods.forEach(food=>{ %>
    <li>
        <%= food %> 
    </li>
    <%}) %> 
    </ul>
- boilerplate only needed on layouts.ejs file because all of the html files are sent together
## Layouts
    - In class we used ejs layouts first we have to 
1. Making an express ap per instructions above install ejs
    - ➜  love-it-or-leave-it *npm i ejs*
2. Make a folder named views
    - ➜  love-it-or-leave-it *mkdir views*
    - make sure to run npm with: ➜  love-it-or-leave-it *npm init -y*
3. Install express layouts
    - ➜  love-it-or-leave-it *npm i express-ejs-layouts*
4. Add needed files in the views folder
    - ➜  love-it-or-leave-it *touch views/layout.ejs*
5. In the javascript file be sure to import express ejs layouts using below code:
    - const ejsLayouts = require("express-ejs-layouts")
      const { createBrotliCompress } = require("zlib")
6. To render views files they need to be referenced like below:
    - app.get("/", (req,res)=>{
    res.render("index.ejs")
    })
    - app.get("/animals", (req,res)=>{
    res.render("animals.ejs", {animals: ["sand crab", "corny joke dog"]})
    })
7. In each ejs file make a template
## Sequelize
1. Setup with following in terminal
    - only install once like this and it should be available for futurenpm 
        - *install -g sequelize-cli* 
    - create folder and initialize repository
        - *mkdir userapp*
        - *cd userapp*
        - *npm init -y*
        - *touch index.js*
        - *echo "node_modules" >> .gitignore*
    - add/save dependencies (below is for Postgres)
        - *npm install pg sequelize*
    - initialize sequilize
        -*sequelize init*
2. in the config/config.json file update dialect to postgress (or anything you are using) and update database name as well
3. Create databease inside of Postgres
    - *sequelize db:create userapp_development*
4. Create a model and a matching migration
    - *sequelize model:create --name user --attributes firstName:string,lastName:string,age:integer,email:string*