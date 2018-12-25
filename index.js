var name = "Joe"
var height = "74"
 
// Don't worry about this
module.exports = { name, height
}


function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myScope = outerFunction();

myScope();
//innerScope();