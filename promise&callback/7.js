async function getcombinedata() {
  const [data1, data2] = await Promise.all([
    fetch("http://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()),
    fetch("http://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()),
  ]);

  const combinedata = {
    todo: data1,
    post: data2,
  };
  return combinedata;
}
getcombinedata().then((data) => console.log(data));
