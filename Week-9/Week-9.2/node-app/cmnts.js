/**So tsconfig.json file contains lots of configurations or vars that you can yurn off or on and basewd on these tweakings you can conterol how do you 
 * want to convert your typescript file to the javascript file.
 * 
 * before running typescript file you will have to convert your .ts file into a .js file and for this the comand is "tsc-b"
 * now the typrscipt compiler will create a.ts to a.js file.
 * 
 * tsconfig*******************************************************************************************************
 * target : this var decides on what javascript version does the typescript changes to
 *  EC2016 is the newest one, so if you wanna make typescript to get compiled down to early js versions
 * So that it can run on the internet explorer as well than you can make the target or set it to early  version of javascript as well.
 * --------------------------------------------------------------------------------------------------------------------------------------------
 * rootDir -> It represents where should the ts compiler look for the ts files. So wherever rootDir we run the tsc -b only there the js file will be made
 * But for larger or industry level standard, we create a src folder and a dist folder src has ts file while the dist has the js file.
 * so we set
 * rootDir : "./src"
 * outDir : "./dist"
 * 
 * .gitignore consists of this dist folder and node modules as you never push these on github
 * ----------------------------------------------------------------------------------------------------------------------------------------------
 * noImplicitAny : true then you have to implicitely give the type otherwise you don't need to give the type implicitely
 * also we use this when we transition from js to ts
 */

/**
 * Installlation guide
 * 
 * npm install -g typescript
 * 
 * mkdir node-app
 * cd node-app
 * npm init -y
 * npx tsc --init
 */