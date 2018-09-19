(function() {
  function buggy() {
    var a = [1, 2];
    return String(a) === String(a.reverse());
  }
  if(!buggy()) return;
  Array.prototype._reverse = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    if (Array.isArray(this)) this.length = this.length;
    return Array.prototype._reverse.call(this);
  }
  var nonenum = {enumerable: false};
  Object.defineProperties(Array.prototype, {
    _reverse: nonenum,
    reverse: nonenum,
  });
})();
