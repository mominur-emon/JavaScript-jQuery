//method use- text() html() append() prepend() after() before()
$("h1").text("hi test ok");
$("#para").html("<b>bold test </b>");

$(".c1").prepend("i am see. ");
$("#para").append(" working perfectly");

var mypara1 = $("<P></P>").text("this is a paragraph 0");
$("#p1").before(mypara1);
var mypara2 = $("<p></p>").text("this is a paragraph 2");
$("#p1").after(mypara2);

/* html code adding below
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>there is h1</h1>
    <p id="para">paragraph 1</p>
    <h2 class="c1">this is h2</h2>

    <p id="p1">this is a paragraph 1</p>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="index.js"></script>
  </body>
</html>
*/
