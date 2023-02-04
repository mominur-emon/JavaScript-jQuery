$("button").click(function () {
  $("h1").text("You Have Clicked The Button");
});

$("button").click(function () {
  $("h2").toggleClass("style");
});

/* css code
.style {
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
/*html code
<h1>this is a demo</h1>
    <h2>This is demo 2</h2>
    <button>click me</button>
*/

//second problem

$(".mybtn").click(function () {
  var value = this.innerHTML;
  $("h1").text(value + " is clicked");
});

/* html code
 <h1>This a demo</h1>
    <button class="mybtn">button1</button>
    <button class="mybtn">button2</button>
    <button class="mybtn">button3</button>
*/
