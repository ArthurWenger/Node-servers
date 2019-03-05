
function foo(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}


function repeteur(x) { // retourne un objet qui fait une repetition toutes les X sec
  var callback;
  var rpt = {
    onRepeat: function (cb) {
      callback = cb;
    },
    //a: x,
    //foo: function () {
    //  console.log("Test");
    //}
  };
  setInterval(function () {
    if (callback) callback();
  }, x * 1000);

  return (rpt);
}

var obj1 = repeteur(2);
obj1.onRepeat(function () {
  console.log("Hello");
});
//var tab = [18, "UHB", 19];
//var o1 = repeteur(10);
//console.log(o1.a); // obj.x <==> obj['x'] car les champs sont dans un tableau 
//o1.foo(); // idem : o1['foo']()
//console.log(tab);