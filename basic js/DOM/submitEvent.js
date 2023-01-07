//finding the elements
const form = document.querySelector("form");

const name = document.querySelector("div #name");
const email = document.querySelector("div #email");
const password = document.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault();
  //console.log("submit");
  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
  name.value = "";
  email.value = "";
  password.value = "";
}

/*html code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="">
      <div>
        <label for="name"
          >Name :
          <input type="text" id="name" name="name" required autofocus />
        </label>
      </div>
      <div>
        <label for="email"
          >Email :
          <input type="email" id="email" name="email" required />
        </label>
      </div>
      <div>
        <label for="password"
          >Password :
          <input type="password" id="password" name="password" required />
        </label>
      </div>
      <div>
        <input type="submit" value="signup" name="" id="" />
      </div>
    </form>
    <script src="submitEvent.js"></script>
  </body>
</html>
*/
