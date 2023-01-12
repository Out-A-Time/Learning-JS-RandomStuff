// const loadData = (onLoad) => {
//   setTimeout(() => {
//     onLoad("Hello World");
//   }, 4000);
// };

// console.log("Start of script");

// loadData((data) => {
//   console.log(data);
// });

// console.log("End of script");

const loadData1 = (onLoad, onError) => {
  setTimeout(() => {
    const errorOccurred = Math.random() > 0.5;
    if (errorOccurred) {
      onError();
    } else {
      onLoad("Hello World");
    }
  }, 4000);
};

console.log("Start of script");

const handleLoad = (data) => {
  console.log(data);
};
const handleError = () => {
  console.log("An error occured");
};

loadData1(handleLoad, handleError);

console.log("End of script");
