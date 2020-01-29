// The following HTML routes should be created:
// >> GET /notes - Should return the notes.html file. 
// ----- app.get('/notes', function(req, res){res.render('notes.html');});
// >> GET * - Should return the index.html file 
// ----- app.get('*', function(req, res){res.render('index.html');});

var path = require("path");


module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};