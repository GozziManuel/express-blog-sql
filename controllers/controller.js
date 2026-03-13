const connection = require("../data/db");

function home(req, res) {
  const sql = "SELECT * FROM posts";
  connection.query(sql, (err, results) => {
    if (err)
      return res.status(500).json({
        success: false,
        message: "Database query failed",
      });
    res.json({
      success: true,
      message: "Ecco a voi i posts",
      results: results,
    });
  });
}

// Funzione Show
function show(req, res) {
  res.json({
    description: `you are looking at post number `,
  });
}

function store(req, res) {}

function update(req, res) {
  res.json({
    description: `Hai modificato il post `,
  });
}

function modify(req, res) {
  res.json({
    description: `you are modifying partially post number `,
  });
}

function destroy(req, res) {
  res.json({
    description: `you are eliminating post number 1`,
  });
}

module.exports = { home, show, store, update, modify, destroy };
