# tcollab

A centralized team recruitment and collaboration platform that helps students find teammates for hackathons, competitions, and side projects.

### Features

- [ ] View open team recruitments
- [ ] Create new team recruitments
- [ ] Search and filter open team recruitments
- [ ] Apply to open team recruitments
    - [ ] Upload resume document
- [ ] View application history
- [ ] Recruitment dashboard
- [ ] Manage user profile
    - [ ] Add photo profile
    - [ ] Add contact and social links
    - [ ] Toggle "Open To Team" flag
- [ ] Email notifications for in-app events

### Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend Framework | [React](https://react.dev/) |
| Backend Framework | [NestJS](https://nestjs.com/) |
| Database | [PostgreSQL](https://www.postgresql.org/) |
| ORM | [Drizzle ORM](https://orm.drizzle.team/) |
| Validation | [class-validator](https://github.com/typestack/class-validator) and [class-transformer](https://github.com/typestack/class-transformer)|
| Auth | JWT ([@nestjs/jwt](https://github.com/nestjs/jwt)) + [bcryptjs](https://github.com/dcodeIO/bcrypt.js) |

## Running the project 

### Locally from the repo
1. Clone this project locally:
    ```bash
    git clone https://github.com/lazuardiyasfin/tcollab.git
    ```
2. Install dependencies in both backend and frontend:
    ```bash
    cd backend && pnpm install
    cd ../frontend && pnpm install
    ```
3. **Ensure Docker Engine (or Docker Desktop) is running**. Then start the db instance and push database schema:
    ```bash
    cd ../backend
    pnpm db:up
    pnpm db:push
    ```
4. Still in the backend directory, start backend server:
    ```bash
    pnpm start:dev
    ```
5. Lastly, start the frontend server:
    ```bash
    cd frontend
    pnpm dev
    ```

The backend server then will listen on port 3000 (http://localhost:3000) while the frontend dev server listens in port 5173 (http://localhost:5173).

## Documentation

More detailed explanation about the project can be read [here](./docs/README.md).
