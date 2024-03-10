/**
 * Q.  What is prisma migration?
 * 
 * Prisma Migration is a feature provided by Prisma, which is an open-source database toolkit. Prisma is often used with 
 * various programming languages, such as JavaScript and TypeScript, to simplify database access and management.

    Prisma Migrate specifically focuses on database schema migrations. A migration is a way to version-control and 
    apply changes to the structure of your database schema over time. When you develop an application, you may need to make changes to your 
    database schema, such as adding new tables, modifying existing ones, or deleting columns. Migrations help you manage these changes in a structured and reversible manner.

    Here's a brief overview of how Prisma Migration works:

    Schema Definition: You start by defining your database schema in the Prisma Schema file (schema.prisma). 
        This file includes information about your data model, relationships between tables, and other database-specific configurations.

    Generating Migrations: Prisma can automatically generate migration files based on changes made to the Prisma Schema. 
        When you make changes to your schema (e.g., add a new model or modify an existing one), you can use the prisma migrate dev command 
        to generate migration files.

    Applying Migrations: After generating migration files, you apply them to your database using the prisma migrate dev command. 
        This command automatically manages the execution of migrations, updating your database schema to reflect the changes you made in your Prisma Schema.

    Rollbacks: Prisma Migrate supports rollback functionality, allowing you to undo a migration and revert to a previous state if needed.

    By using Prisma Migrate, developers can maintain version control for their database schema, collaborate with others effectively, 
    and manage changes in a way that is both systematic and reversible. This helps ensure consistency across development, staging, and 
    production environments.

Q. Installing prisma :
    Initialize an empty Node.js project
        npm init -y
    Add dependencies
        npm install prisma typescript ts-node @types/node --save-dev
    Initialize typescript
        npx tsc --init
        Change `rootDit` to `src`
        Change `outDir` to `dist`
    Initialize a fresh prisma project
        npx prisma init
 */