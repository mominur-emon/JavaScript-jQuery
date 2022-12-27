function MyMsg() {
  var x = document.querySelector("#par");
  x.innerHTML = "you have click button one";
}

function MSG() {
  var x = document.querySelector("#par");
  x.innerHTML = "you click button two";
}

var p = document.querySelector("#picId");
function picture() {
  p.src = "image.jpg";
}

/*html code 

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <button onclick="MyMsg()">click me</button>
    <button onclick="MSG()">click here</button>

    <p id="par">demo</p>

    <button onclick="picture()">see picture</button>
    <br />
    <img id="picId" src="#" alt="" height="100" width="100" />

    <script src="onclick.js"></script>
  </body>
</html>
*/
