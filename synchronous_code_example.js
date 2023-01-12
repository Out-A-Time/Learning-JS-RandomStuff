const loadData1 = () => {
  //Artificial delay
  for (let index = 0; index < 4000000000; index++) {}
  return "Hello World";
};

console.log("Start of script");
const data1 = loadData1();
console.log(data1);
console.log("End of script");

const loadData2 = () => {
  setTimeout(() => {
    return "Hello World";
  }, 4000);
};

console.log("Start of script");
const data2 = loadData2();
console.log(data2);
console.log("End of script");
