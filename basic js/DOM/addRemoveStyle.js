function add() {
  var x = document.querySelector("#prg");
  x.classList.add("prg-style");
}

function remove() {
  var x = document.querySelector("#prg");
  x.classList.remove("prg-style");
}

/* html code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <p id="prg">this a paragraph</p>
    <button onclick="add()">add style</button>
    <button onclick="remove()">remove style</button>
    <script src="addRemoveStyle.js"></script>
  </body>
</html>
*/

/* css style

.prg-style {
  color: blue;
  font-family: italic;
  font-weight: bold;
  font-size: 36px;
}
*/
