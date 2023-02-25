function capitalize(string){
  let newString = "";

  for(let i = 0; i < newString.length; i+=2){
    if(i % 2 === 0){
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  };

  return newString;
}

console.log(capitalize("Hello"));