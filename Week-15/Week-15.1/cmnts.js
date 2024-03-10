/**--------------------------------------------Docker------------------------------------------------------------------------------------------------
 * Docker is a platform for developers and system administrators that allows them to package applications into standardized units called containers. 
 * These containers bundle up the code, libraries, system tools, and settings needed to run an application, making it easy to deploy and run the 
 * application on any system with Docker installed.

    Here are some key benefits of using Docker:

    Portability: Docker containers can be run on any system with Docker installed, regardless of the underlying operating system. 
        This makes it easy to move applications between development, testing, and production environments.
    Isolation: Each Docker container runs in its own isolated environment, which means that applications running in different containers 
        cannot interfere with each other. This helps to improve the reliability and security of applications.
    Reproducibility: Docker containers guarantee that an application will run the same way on any system, regardless of the environment. 
        This makes it easier to collaborate on development projects and to troubleshoot problems

    -------------------------------------------Containers----------------------------------------------------------------------------------------------

    In the world of software development, containers are essentially self-contained units that package up an application and all its dependencies. 
    This includes the code itself, libraries, system tools, 
    and settings  needed to run the application.  Imagine a shipping container, but for software!

    Here's what makes containers special:

    Lightweight: Unlike virtual machines (VMs) that require a whole guest operating system, containers share the host's kernel, 
        making them much smaller and faster to start up.
    Portability: Containers can run seamlessly on any system with Docker or a similar container engine installed, regardless of the underlying 
        operating system. This makes them ideal for moving applications between development, testing, and production environments.
    Isolation: Each container runs in its own isolated space, ensuring applications don't interfere with each other. This enhances reliability and 
        security of your software.
    In simpler terms, containers provide a standardized way to package and deploy applications, making them efficient, portable, and isolated. 
        This allows developers to focus on building the application itself, without worrying about the complexities of the underlying environment.

    Containers are a way to package and distribute software applications in a way that makes them easy to deploy and run consistently across 
    different environments. They allow you to package an application, along with all its dependencies and libraries, 
    into a single unit that can be run on any machine with a container runtime, such as Docker.

    1. Everyone has different Operating systems
    2. Steps to run a project can vary based on OS
    3. Extremely harder to keep track of dependencies as project grows

    Benefits :

    1 .Let you describe your configuration in a single file
    2. Can run in isolated environments
    3. Makes Local setup of OS projects a breeze
    4. Makes installing auxiliary services/DBs easy

    -----------------------------------------Docker Engine and registry-----------------------------------------------------------------------

    Docker Engine is the core tool behind Docker. It's like a special factory that builds and manages shipping containers for your software.  
    Imagine a box holding your application and all its tools, ready to run on any computer. Docker Engine builds these containers (packages the app) 
    and ensures they run smoothly (manages them) on any system, regardless of the underlying operating system. This makes your applications portable 
    and isolated, like having your own kitchen (environment) for each recipe (application). 

    In short, Docker registries provide a way to store, share, and access the building blocks (images) you need to run containerized applications.

    ------------------------------------------Image vs container------------------------------------------------------------------------------

    Image: Think of it as a blueprint or a recipe. It contains all the instructions and ingredients (code, libraries, configurations) needed to build a 
    specific application. Images are static and read-only. You can't directly run an application from an image.

    Container: Imagine the image as the recipe, and the container is the cooked dish. It's a running instance of an image, with all the parts 
    assembled and ready to use.  Containers are self-contained and isolated, meaning changes in one container won't affect others. 
    You can start, stop, and manage containers as needed.

    Analogy:

    Image: A pizza dough recipe (specifies ingredients and instructions)
    Container: The actual baked pizza (made from the recipe)

    -----------------------------------------------PORT MAPPING----------------------------------------------------------------------------------
    Each container is different and their port is different, so even if a mongo db container is running on its port 27017 still the device 27017 
    port will not be connected to it and it will be free. Now you have to map the device port it can be any port to the container port whioch is running that.
    may be the case that device port 27018 is connected to container port 27017.

    Port mapping in Docker is a technique used to expose services running inside a Docker container to the host machine or external network.
    It essentially creates a forwarding rule that directs traffic from a specific port on the host machine to a corresponding port on the container.

    Container Ports: These are ports that applications within a container use to communicate with the external world. 
        They are designated by a port number, similar to traditional network ports.
    Host Ports: These are ports on the Docker host machine itself. They also use standard port numbers and act as entry points for 
        incoming network traffic.
    Port Mapping: The process of establishing a connection between a container port and a host port. This mapping instructs the 
        Docker host to route any traffic arriving at the specified host port to the corresponding container port.
    
    docker run -d -p 27018:27017 mongo

    ----------------------------------------------Docker common commands ---------------------------------------------------

    Step 8 - Common docker commands
        docker images
        docker ps 
        docker run  (docker run -d 27017:27017 mongo)-> let u run the container in the background
        docker kill
        docker build
    1. docker images
        Shows you all the images that you have on your machine
    2. docker ps
        Shows you all the containers you are running on your machine
    3. docker run
        Lets you start a container
        -p ⇒ let’s you create a port mapping
        -d. ⇒ Let’s you run it in detatched mode
    4. docker build
        Lets you build an image. We will see this after we understand how to create your own Dockerfile
    5. docker push
        Lets you push your image to a registry
    6. Extra commands
        docker kill
        docker exec
    
    ----------------------------------------DockerFile--------------------------------------------------------------------------
    A Dockerfile is a text document that contains instructions for building a Docker image. It's essentially a recipe that tells Docker how to assemble 
    the necessary components to create a specific container environment.  Here's a breakdown of its role:

    Standardized Instructions: The Dockerfile uses a set of commands specific to Docker to define the steps involved in building the image. 
        These commands provide a standardized way to create consistent and repeatable container environments.
    Building Blocks: Each instruction in the Dockerfile specifies an action, such as copying files, installing dependencies, or setting environment 
        variables. These actions work together to build the layers of the final image.
    Base Image: A Dockerfile typically starts by referencing a base image, which is a pre-built image containing a base operating system and any 
        essential tools. This provides a foundation upon which you can build your specific application environment.
    Customization: The Dockerfile allows you to customize the base image by adding additional layers. You can install required application dependencies, 
        copy your application code, and configure settings specific to your application's needs.
    Essentially, a Dockerfile acts as a blueprint for creating a customized Docker image that incorporates everything your application needs to run in 
        a containerized environment.

    --------------------------------------DockerFile------------------------------------------------------------------------------
    FROM  node:20    
    #base-image(every dockerFile needs to have the base image at the top.)

    WORKDIR /app 
    #This is our working directory and we say that whenever the conainer starts here will the commands will run

    COPY . .
    #COPY EVERYTHING OVER HERE from first . and copy it to the working directory .

    RUN npm install
    RUN npx prisma generate
    RUN npm run build

    EXPOSE 3000
    #you have to tell the docker container that this is the port that we wanna expose

    #all of the above code runs when you create an image and whatever you run afer CMD is what u run when you start the container.

    CMD ["node" , "dist/index.js"]

    ----------------------------------------------
 */