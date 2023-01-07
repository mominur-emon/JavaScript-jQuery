var len = document.querySelectorAll(".btn").length;

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text + " is clicked";
  });
}

/*html code

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
    <h1>you have not clicked any button</h1>
    <button class="btn">button 1</button>
    <button class="btn">button 2</button>
    <button class="btn">button 3</button>
    <script src="evenListener2.js"></script>
  </body>
</html>
*/
