function capitalize(string){
  let arr = string.split('<div>');
  let count = 0;
  
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
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


console.log(capitalize("<div><div><p>Hello</p><div><div>"));
