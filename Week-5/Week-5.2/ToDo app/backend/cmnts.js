/**
 * So whenever we start a project we first create a README.md file and write-down project details in it in mark down lang
 * (stackedit.io is one of many markdown render)
 * Other thing is we first create the backend folder
 * and then run a npm init -y cmd in it and it will create a package.json file in the folder
 * 
 * The npm init -y command is used to initialize a new Node.js project and create a package.json file 
 * with default values without prompting the user for input. The -y flag stands for "yes" and is a shorthand way to automatically
 *  accept all the default configurations.
    When you run npm init -y, it will generate a package.json file with default values for properties like the project name, 
    version, description, entry point, test command, repository, keywords, author, license, etc. This is useful when you want to quickly 
    set up a new project with default settings and don't want to go through the interactive prompts.

    After that we can run npm install express or other dependencies and it will add a new object in the package.json file with
    the name called dependencies and it will store all the dependencies that is being used in the project.
    Now also a new node-modules folder will also be created as installing express will require other modules that are used in express 
    will also get downloaded with it.

    Now you can even delete the node module file as well and share the project with your friend and what your friend get is the folder of project
    without node-modules as they are quite heavy
    And when your friend run the npm intsall command in the folder then it will only install those node modules which are in the dependencies and no other 
    irrelevant modules will get installed.
 */