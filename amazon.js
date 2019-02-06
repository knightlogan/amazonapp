var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Elliott03*",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
    start();
});

function start() {
    // query the database for all items being sold
    connection.query("SELECT * FROM products", function(err, resp) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    var table = new Table({
      head: ['id', 'Product Name', 'Price']
    , colWidths: [10, 20, 10]
  });  
  for (var i = 0; i < resp.length; i++) {
    table.push([resp[i].item_id, resp[i].product_name, resp[i].price])
  };
  console.log(table.toString());
  show(resp);
  });
  //Ask user what they want to purchase
  };

  function show(resp) {
    console.log(resp);
    inquirer
      .prompt ([
        {
          name: "Choice",
          message: "What would you like to buy?"
        },
        {
          name: "Quantity",
          message: "How many would you like to purchase?"
        }
      ])
      .then(function (answer) {
        console.log(answer);
        for (let i = 0; i < resp.length; i++) {
          if(parseInt(answer.Choice) === resp[i].item_id) {
            var chosenItem = resp[i];
            console.log(chosenItem);
          }
        }
        })
      }