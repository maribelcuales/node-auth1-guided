# Node Auth 1 Guided Project

Guided project for **Node Auth 1** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds authentication to the API.

## Auth Workflow
- register. 
  - hash the password --> `bcryptjs`.  Go from 'pass' to '2##@SDDRTLKDLFJSLFNDS SLNLSDFLSDFKLSFLS#'.
- login.
- logout.
- restrict access to endpoints. 

## Seed the Database

- use `npx knex seed:make name` to create a new seed file.
- use `npx knex seed:run` to run all seeds.

## Layers

- [ routing ] <> [ services/business logic ] <> [ model/data access ]


## Additional Notes
- Hash passwords before saving them to the database
- Verify passwords using bcrypt

