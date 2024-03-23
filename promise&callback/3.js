const person = {
  firstname: "durgesh",
  lastname: "chy",
  age: 20,
};
function ageindays(personobject, callback) {
  const fullname = "${personobject.firstname}${personobject.lastname}";
  const ageindays = personobject.age * 365;
  callback(fullname, ageindays);
}
function logresult(fullname, ageindays) {
  console.log("the person full name is${fullname} and their age in days is${ageindays}");
}
