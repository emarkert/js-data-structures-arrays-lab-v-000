// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name);
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function destructivelyRemoveLastDriver() {
  return drivers.pop();
}

function appendDriver(driver) {
  const addedDriverBack = drivers.splice(-1, 0, driver);
  return addedDriverBack;
}

function prependDriver(driver) {
  const addedDriverFront = drivers.splice(1, 0, driver);
  return addedDriverFront;
}

function removeLastDriver() {
  const newArray = drivers.slice(0, drivers.length -1)
  return newArray;
}

function removeFirstDriver() {
  const newArray = drivers.slice(1);
  return newArray;
}
