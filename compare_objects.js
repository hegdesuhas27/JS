var person1 = {
    name: "suhas",
    loc: "banglore",
    dob: 1997
}
var person2 = {
    name: "ajay",
    loc: "hyderabad",
    dob: 1997
}

function compareObjects( obj1, obj2 ){

    var obj1ProNames = Object.getOwnPropertyNames(obj1);
    var obj2ProNames = Object.getOwnPropertyNames(obj2);

    if( obj1ProNames.length != obj2ProNames.length ){
        return "objects not equal";
    }

    for( var i = 0; i < obj1ProNames.length; i++ ){
        var name = obj1ProNames[i];
        if( obj1[name] != obj2[name] ){
            return "objects not equal";
        }
    }

    return "objects are equal";
}

console.log( compareObjects( person1, person2 ) );