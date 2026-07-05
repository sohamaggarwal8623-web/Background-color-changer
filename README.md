# Background Color Changer

A simple React app where clicking a button changes the page's background color. Built while learning React state and event handling.

## Features

- Click a color button to instantly change the background
- Available colors: Red, Green, Blue, Black, Orange, White
- Styled with Tailwind CSS

## Built With

- [React](https://react.dev/) — UI library
- [Vite](https://vite.dev/) — build tool / dev server
- [Tailwind CSS](https://tailwindcss.com/) — styling

## How It Works

The app keeps the current color in a piece of React state (`useState`). Each button has an `onClick` that updates that state, and the background style reads from it — so the screen re-renders in the new color.

## Run It Locally

You need [Node.js](https://nodejs.org/) installed. Then:

```bash
# 1. Install the dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL it prints (usually http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — check the code with ESLint
