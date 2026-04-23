import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e_learning_app",
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB connection failed:", err.message);
  } else {
    console.log("✅ MySQL connected successfully");
  }
});

export default db;