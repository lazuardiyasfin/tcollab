# Development

## Prerequisites

Ensure you have following installed:
- [Node.js](https://nodejs.org/en) version >= `24.18.0`
- [Pnpm](https://pnpm.io/installation) version >= `12.14.0`
- [Docker](https://docker.com/)

## Installation

Run this to install dependencies from package.json in each directory.

```bash
cd backend
pnpm install

cd ../frontend
pnpm install
```

### Configuration 

Before running the app, create the needed environment files in both backend and frontend root directory. Copy example environment files that has been provided and modify accordingly.

```bash
cp ./backend/.env.example .env
cp ./frontend/.env.example .env
```

### Running the project

Start the PostgreSQL docker instance by the `compose.yaml` in backend directory, then push the database schema using these commands:

```bash
cd backend
pnpm db:up
pnpm db:push
```

After that, run a backend app with this command. Ensure current directory in `/backend`.

```bash
pnpm start:dev
```

Open another terminal and run the frontend dev server with the command below. 

```bash
cd frontend
pnpm dev
```

### Stopping & cleanup

Press `Ctrl + C` in respective terminals to stop the frontend and backend servers.

To stop the PostgreSQL container:

```bash
cd backend
pnpm db:down
```

Or you might want to wipe everything and start a fresh database schema:
```bash
cd backend
pnpm db:reset
```
