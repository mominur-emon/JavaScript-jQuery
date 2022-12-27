/*getElementById
getElementsByTagName
getElementsByClassName*/

//document.getElementById("heading1").innerHTML = "Hello";
var myHeading = document.getElementById("heading1");
myHeading.innerHTML = "Hello";

document.getElementById("para").innerHTML = "all ok ";

document.getElementsByTagName("h2")[0].innerHTML = "everthing ok";

document.getElementsByClassName("test")[0].innerHTML = "class test ok";

/* //html part adding below

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <h1 id="heading1">This is a heading 1</h1>
    <p id="para">this a paragraph</p>

    <h2>this is just test h2</h2>
    <h2>this is 2nd test just h2</h2>
    <h3 class="test">this is test just h3</h3>

    <script src="practicDom.js"></script>
  </body>
</html>
*/
/*--------------------------------------------------------------*/

/*using querySelector method */

//querySelector
/*querySelector use to be id use #hash and use to class use .dot 
and when using tag name just use to the name tag*/

document.querySelector("#test").innerHTML = "this is id paragraph work";
document.querySelector(".ck").innerHTML = " this class test is ok";
document.querySelector("h3").innerHTML = "this is work to the tag";

/*html code

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <p id="test">this a paragraph</p>
    <h1 class="ck">every this test for h1</h1>
    <h3>hey plase check me</h3>

    <script src="practicDom.js"></script>
  </body>
</html>
*/
