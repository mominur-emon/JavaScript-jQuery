$("#logBtn").click(function () {
  var p1 = $("#pass1").val();
  var p2 = $("#pass2").val();

  if (p1 != "" && p2 != "") {
    if (p1 == p2) {
      alert("Succesfully login");
    } else {
      alert("password don't match.");
    }
  } else {
    alert("Please enter your password");
  }
});

/*html code
 <input type="password" name="" id="pass1" placeholder="Enter Password" />
    <br />
    <br />
    <input type="password" name="" id="pass2" placeholder="ReEnter Password" />
    <br />
    <br />
    <button id="logBtn">Login</button>
   */
