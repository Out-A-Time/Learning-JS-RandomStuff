const loadData = () => {
  const errorOccurred = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (errorOccurred) {
        reject("Something went wrong");
      } else {
        resolve("Hello world");
      }
    }, 4000);
  });
};

console.log("Start of script");

const promise = loadData();

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("End of script");
