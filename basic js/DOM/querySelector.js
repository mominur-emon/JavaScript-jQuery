document.querySelector("a").innerHTML = "Town";

document.querySelector(" li a").innerHTML = "Natore"; //parent tag then child tag use
document.querySelector("li p").innerHTML = "Rajshahi";

//document.querySelector("div a").innerHTML = "address";//one way
document.querySelector(".test a").innerHTML = "address"; //2nd way

/* html code below adding 

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <a href="#">Home</a>

    <ul>
      <li><a href="#">Gazipur</a></li>
      <li>
        <p>Dhaka</p>
      </li>
    </ul>

    <div class="test">
      <a href="#">Contact</a>
    </div>

    <script src="querySelector.js"></script>
  </body>
</html>
*/
