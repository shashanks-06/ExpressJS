Steps

1. npm init

2. npm i -g nodemon

3. npm i esm

4. Add this in package.json
  -- "scripts": { "dev": "nodemon -r esm server.js", "start": "node -r esm server.js" },

5. Then use -- npm run dev
