# Blackjack

Browser-based Blackjack game with a small Express server for static assets.

## Prerequisites

- [Node.js](https://nodejs.org/) (includes `npm`)

## Setup

Install dependencies:

```bash
npm install
```

## Run

Start the server:

```bash
node server.js
```

The server listens on **port 3000** by default.

## Open the app

| URL | Description |
|-----|-------------|
| [http://localhost:3000/](http://localhost:3000/) | Main game (`index.html`) |
| [http://localhost:3000/player](http://localhost:3000/player) | Player room (`client.html`) |

## Stack

- **Backend:** [Express](https://expressjs.com/) (`server.js`)
- **Frontend:** HTML, CSS, and vanilla JavaScript under `public/`

## Project layout

- `server.js` — Express app and routes
- `index.html`, `client.html` — pages served from the project root
- `public/` — styles, scripts, and other static files served at `/`
# js-blackjack
