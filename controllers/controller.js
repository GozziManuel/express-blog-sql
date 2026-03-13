function home(req, res) {
  res.json({
    success: true,
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
