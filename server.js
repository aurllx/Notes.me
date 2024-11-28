const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

const db = mysql.createConnection({
  host: "localhost",
  database: "notes",
  user: "root",
  password: "",
});

// connect db
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");

  // Get data
  app.get("/", (req, res) => {
    // const ale = document
    const noteId = req.params.id;
    const sql = `SELECT * FROM note`;
    db.query(sql, (err, results) => {
      const users = JSON.parse(JSON.stringify(results));
      res.render("index", { users: users, title: "Note App" });
    });
  });

  // Create a Note
  app.post("/tambah", (req, res) => {
    const { title, func, exam } = req.body;
    const insertSql = `INSERT INTO note (title, func, exam) VALUES (?, ?, ?) `;
    db.query(insertSql, [title, func, exam], (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });

  // Update a Note Form
  app.get("/update/:id", (req, res) => {
    const id = req.params.id;

    const query = "SELECT * FROM notes WHERE id = ?";
    db.query(query, [id], (error, results, fields) => {
      if (error) throw error;

      const note = results[0];
      res.redirect("/");
    });
  });

  // Update a Note
  app.post("/update/:id", (req, res) => {
    const noteId = req.params.id;
    const { title, func, exam } = req.body;
    const updateSql = `UPDATE note SET title = ?, func = ?, exam = ? WHERE id = ${noteId}`;
    db.query(updateSql, [title, func, exam, noteId], (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });

  // Delete a Note
  app.get("/delete/:id", (req, res) => {
    const noteId = req.params.id;
    const deleteSql = `DELETE FROM note WHERE id = ${noteId}`;
    db.query(deleteSql, [noteId], (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});

app.listen(8000, () => {
  console.log("server ready");
});
