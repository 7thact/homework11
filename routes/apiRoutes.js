// The following API routes should be created:
// >> GET /api/notes - Should read the db.json file and return all saved notes as JSON.
// >> POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
// >> DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const fs = require("fs");

// var tableData = require("../data/tableData");
var data = require("../db.json");
// console.log(data);
// var parsedData = JSON.parse(data);


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(data);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (data.length < 5) {
      data.push(req.body);
      res.json(true);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  

  app.delete("/api/notes/:id", function(req, res,) {
    // Empty out the arrays of data
    // data.id = 0;
    // get the id of the one to delete
    console.log(req.params)
    // remove that obj(id) from the data.json

    // var chosen = req.params.id

    // for (var i = 0; i < id.length; i++) {
    //     if (chosen === id[i].routeName) {
    //         id = 0;
    //     }
    // }

    // res.json({ ok: true });

  });
};
