const sql = require("better-sqlite3");
const db = sql("users.db");

const dummyUsers = [
  {
    email: "user01@example.com",
    password: "12345678",
    slug: "1",
    first_name: "Ben",
    last_name: "Weight",
    image:
      "https://raw.githubusercontent.com/Chious/link-sharing-app/main/assets/images/favicon-32x32.png",
    links: JSON.stringify({
      1: { title: "github", link: "https://github.com" },
    }),
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       first_name TEXT,
       last_name TEXT,
       image TEXT,
       links TEXT,
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO users VALUES (
         null,
         @slug,
         @first_name,
         @last_name,
         @image,
         @links
      )
   `);

  for (const user of dummyUsers) {
    stmt.run(user);
  }
}

initData();
