arr = ["a", "b", "c", "d", "e"];
let string = "";

let makeString = () => {
  for (i = 0; i < arr.length; i++) {
    string += arr[i];
    if (i != arr.length - 1) {
      string += ",";
    }
  }
  console.log(string);
  return string;
};

makeString(arr);