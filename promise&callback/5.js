function greet(name) {
  return new Promise((resolve) => {
    const greeting = "hello,${name}!";
    resolve(greeting);
  });
}
greet("durgesh").then((message) => console.log(message));
