function capitalize(string){
  let newString = "";

  for(let i = 0; i < string.length; i++){
    if(string[i] === "<" && string[i+1] === ">"){
      newString += "</div";
      // i += 5;
    } else {
      newString += string[i];
    }
  };

  
  return newString;
}


console.log(capitalize("<div>Hello this is test!<><div>Let`s try one more time<>"));
