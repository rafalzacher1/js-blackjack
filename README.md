# js-blackjack

## Description

Browser-based **Blackjack** with a small **Express** server that serves `index.html`, `client.html`, and static assets (cards, scripts, styles).

## Prerequisites

- **[Node.js](https://nodejs.org/)** (LTS recommended; includes `npm`)
- Optional: **[pnpm](https://pnpm.io/)** if you use the lockfile (`pnpm-lock.yaml`)

## Installation

```bash
cd js-blackjack
npm install
```

If you use pnpm:

```bash
pnpm install
```

## Usage

Start the server:

```bash
node server.js
```

The app listens on **port 3000** by default.

| URL | Page |
|-----|------|
| [http://localhost:3000/](http://localhost:3000/) | Main game (`index.html`) |
| [http://localhost:3000/player](http://localhost:3000/player) | Player room (`client.html`) |

## Project structure

| Path | Role |
|------|------|
| `server.js` | Express app and routes |
| `index.html`, `client.html` | Pages at project root |
| `public/` | Static assets: `cards/`, `scripts/`, `styles/` |

## Stack

- **Runtime:** Node.js  
- **Server:** [Express](https://expressjs.com/)  
- **Client:** HTML, CSS, vanilla JavaScript
