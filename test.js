let myObj = {
    name: "koko",
    age: 30
};

function Myfunc(ob){
        ob = null;

        return ob.name;
}


console.log(Myfunc(myObj));

console.log(myObj);