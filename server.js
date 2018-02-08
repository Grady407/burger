var express = require('express')

//***************override******/

var methodOverride = require('method-override')
var app = express()
//**************************/

var bodyParser = require('body-parser')




var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});



// ******************************************

// For this assignment, I was unable to finish coding the functionality for adding new burgers and 
// and devouring them.
// **********************************************************






//********express********//

// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })
   
//   app.listen(3000)

  //********express********//
