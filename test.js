function capitalize(string){
  let arr = string.split('<div>');
  let count = 0;
  console.log(arr);
  let newArr = [];

  for(let i = 1; i < arr.length - 1; i++){
    if(i % 2 !== 0){
      newArr.push("<div>");
      newArr.push(arr[i]);
      newArr.push("</div>");
    } else {
      newArr.push(arr[i]);
    }
  };

  return newArr.join("");
  // return newString;
}


console.log(capitalize("<div>Hello this is test!<div><p>Paparak</p><div>Let`s try one more time<div>"));
