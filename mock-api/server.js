// server.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/login", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Login Page</title>
      </head>
      <body>
        <h1>Mock Login Page</h1>
        <form>
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Mock API server running at http://localhost:${PORT}`);
});
