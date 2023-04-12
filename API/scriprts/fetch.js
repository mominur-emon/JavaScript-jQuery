//fetch has replaced XMLHttpRequest
//fetch global method for making HTTP Request
//2 ways to call - then , async await

//use then ways

console.clear();
//get method
/*fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (!res.ok) {
      const msg = `Error: ${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));*/

//post method
/*fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => {
    if (!res.ok) {
      const msg = `Error: ${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));*/

//put method

/*fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foods",
    body: "barma",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => {
    if (!res.ok) {
      const msg = `Error: ${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
*/

//patch method

/*fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "focus",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => {
    if (!res.ok) {
      const msg = `Error: ${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));*/

//delete method

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "DELETE",
})
  .then((res) => {
    if (!res.ok) {
      const msg = `Error: ${res.status}`;
      throw new Error(msg);
    }
    return res.json();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
