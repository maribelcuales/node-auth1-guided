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

## Additional Notes
- Hash passwords before saving them to the database
- Verify passwords using bcrypt
