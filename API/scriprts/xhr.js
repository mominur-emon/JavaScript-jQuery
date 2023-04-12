console.clear();
//use this side for fake api = https://jsonplaceholder.typicode.com/guide/
//use promise
const makeRequest = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      //onload event data processing
      let data = xhr.response;
      console.log(JSON.parse(data));
    };

    xhr.onerror = () => {
      //error case
      console.log("error is here");
    };

    xhr.send();
  });
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts").then((res) =>
    console.log(res)
  );
};

getData();

//use for get request

/*const makeRequest = (method, url) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    //onload event data processing
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    //error case
    console.log("error is here");
  };

  xhr.send();
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");//GET method use fake api 
};

getData();*/

//use for post request
/*const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = () => {
    //onload event data processing
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    //error case
    console.log("error is here");
  };

  xhr.send(JSON.stringify(data));
};

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  }); //Post method use fake api
};

sendData();*/

//put request

/*const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = () => {
    //onload event data processing
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    //error case
    console.log("error is here");
  };

  xhr.send(JSON.stringify(data));
};

const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "food",
    body: "barbe",
    userId: 1,
  });//put use for data update all
};
updateData();*/

//patch request

/*const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = () => {
    //onload event data processing
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    //error case
    console.log("error is here");
  };

  xhr.send(JSON.stringify(data));
};

const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "this is change work",
  }); //PATCH use for data update single data
};
updateSingleData();*/

//Delete request

/*const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = () => {
    //onload event data processing
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    //error case
    console.log("error is here");
  };

  xhr.send(JSON.stringify(data));
};

const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1"); //delete use 
};
deleteData();*/
