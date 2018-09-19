if (runInNode()) {
  var Benchmark = require("benchmark");
}

var suite = new Benchmark.Suite();

function runInNode() {
  return typeof window === "undefined";
}

function current() {
  function buggy() {
    var a = [1, 2];
    return String(a) === String(a.reverse());
  }
  if (!buggy()) return;
  var r = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    if (Array.isArray(this)) this.length = this.length;
    return r.call(this);
  };
}

function next() {
  var a = [1, 2];
  if (String(a) !== String(a.reverse())) return;
  var r = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    if (Array.isArray(this)) this.length = this.length;
    return r.call(this);
  };
}

suite
  .add("current", function() {
    current();
  })
  .add("next", function() {
    next();
  })
  .on("cycle", function(event) {
    output(String(event.target));
  })
  .on("complete", function() {
    output("Fastest is " + this.filter("fastest").map("name"));
    output("completed.");
  })
  .run({ async: true });

output(Benchmark.platform.description);
output("Please wait...");

function output(text) {
  if (runInNode()) {
    console.log(text);
  } else {
    var div = document.createElement("div");
    var t = document.createTextNode(text);
    div.appendChild(t);
    document.body.appendChild(div);
  }
}
