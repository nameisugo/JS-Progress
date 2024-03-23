// ASYNC/AWAIT

async function asyncFn() {
  // Always return Promise
}

const asyncFn = async () => {
  // Always return Promise
};

const asyncFn = async () => {
  return "Success!";
};

asyncFn().then((value) => console.log(value));

const asyncFn = async () => {
  throw new Error("There was an error!");
};

asyncFn()
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

// AWAIT

const asyncFn = async () => {
  await "Promise";
};

async();

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = async () => {
  console.log("Timer starts");
  await timerPromise();
  console.log("Timer ended");
};

asyncFn();

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = async () => {
  console.log("Timer starts");
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log("Timer ended", endTime - startTime);
};

asyncFn();

const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const url = "https://jsonplaceholder.typecode.com/todos";

const data = await getData(url);

const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const url = "https://jsonplaceholder.typicode.com/todos";

try {
  const data = await getData(url);
  console.log(data);
} catch (error) {
  console.log(error.message);
}
