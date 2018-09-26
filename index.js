(function() {
  var a = [1, 2];
  if(String(a) !== String(a.reverse())) return;
  var r = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    if (Array.isArray(this)) this.length = this.length;
    return r.call(this);
  }
})();
