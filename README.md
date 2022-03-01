# Getting Started
## npm run dev to start the server

1. This Project is configured with Typescript
    <ul><li> Please do not add code without data typing it. I will work but it will be messy and hard to understand

# Current WIP

1. Working on Edit/Delete buttons for indiviual todos
    <ul><li> Can't figure out how to target individual todo objects from the array to delete/edit them.
    <ul><li> Part of the problem is that I'm using localStorage which doesn't exist with next until after <ul><li> compile time

# Features I need to add

1. Working Edit and delete buttons
2. Custom React hook that mimicks hiting a server with a 25% chance to fail
3. Another way to display the Todos that isn't in a \<ul> or \<li> element
4. Prisma Database (after the other feats)

## What not to concern yourself with

1. Tailwind and Twin Macro are installed but not configured.
2. You don't need a docker container for this project, it uses localStorage for now.

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3001/api/hello](http://localhost:3001/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
