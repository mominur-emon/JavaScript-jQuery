document.querySelector("button").addEventListener("click", function () {
  alert("hi");
});

const myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", myfunction);

function myfunction() {
  myVar.classList.add("my-style");
}

myVar.addEventListener("mouseout", function () {
  myVar.classList.remove("my-style");
});

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
    <h1>this is a test case</h1>
    <button>click me</button>
    <script src="evenListener1.js"></script>
  </body>
</html>
*/

/*css style

.my-style {
  font-family: italic;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  color: white;
  background-color: red;
  padding: 10px;
  margin: 10px 20px;
  cursor: pointer;
}
*/
