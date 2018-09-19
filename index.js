(function() {
  function buggy() {
    var a = [1, 2];
    return String(a) === String(a.reverse());
  }
  if(!buggy()) return;
  var r = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    if (Array.isArray(this)) this.length = this.length;
    return r.call(this);
  }
})();
