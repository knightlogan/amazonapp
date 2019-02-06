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
      var table = new Table({
        head: ['id', 'Product Name', 'Price']
      , colWidths: [10, 20, 10]
    });

    table.push(
        [resp[0].item_id, resp[0].product_name, resp[0].price],
        [resp[1].item_id, resp[1].product_name, resp[1].price],
        [resp[2].item_id, resp[2].product_name, resp[2].price],
        [resp[3].item_id, resp[3].product_name, resp[3].price],
        [resp[4].item_id, resp[4].product_name, resp[4].price],
        [resp[5].item_id, resp[5].product_name, resp[5].price],
        [resp[6].item_id, resp[6].product_name, resp[6].price]
    );
      // once you have the items, prompt the user for which they'd like to buy
      console.log(table.toString());
    });
    show();
  }

  function show() {
   inquirer
    .prompt({
      name: "buy",
      type: "rawlist",
      message: "What item would you like to purchase?",
      choices: ["1", "2", "3", "4", "5", "6"]
    });
  }



  .then(function(answer) {
    // get the information of the chosen item
    var chosenItem;
    for (var i = 0; i < resp.length; i++) {
      if (resp[i].item_id === answer.choice) {
        chosenItem = resp[i];
      }
    }
  })

  if (chosenItem.stock_quantity > parseInt(answer.bid)) {
    // bid was high enough, so update db, let the user know, and start over
    connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: answer.bid
        },
        {
          id: chosenItem.id
        }
      ],
      function(error) {
        if (error) throw err;
        console.log("Congratulations on your purchase!");
        start();
      }
    );
  }
  else {
    // bid wasn't high enough, so apologize and start over
    console.log("I'm sorry, we don't have enough. Try again...");
    start();
  }
});
});
}