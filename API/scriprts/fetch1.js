//use asynce await ways

const makeRequest = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const msg = `Error: ${res.status}`;
    throw new Error(msg);
  }

  const data = await res.json();
  return data;
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

getData();
