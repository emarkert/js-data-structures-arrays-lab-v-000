// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
  const newDrivers = drivers.unshift();
  return newDrivers;
}
