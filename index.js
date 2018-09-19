(function() {
  function buggy() {
    function detect() {
      var a = [0, 1];
      a.reverse();
      return a[0] === 0;
    }
    return detect() || detect();
  }
  if(!buggy()) return;
  var r = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    if (Array.isArray(this)) this.length = this.length;
    return r.call(this);
  }
})();
