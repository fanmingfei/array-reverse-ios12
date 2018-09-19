(function() {
  var ua = navigator.userAgent;
  if (!ua.match(/(iPhone|iPad|iPod)/)) return;
  var matched = ua.match(/OS ([\d_\.]+) like Mac OS X/);
  if (!matched || !matched[1]) return;
  // Match all iOS 12, because we don't know the time when Apple fixed the bug.
  if (matched[1].indexOf('12') !== 0) return;
  Array.prototype._reverse = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    this.length = this.length;
    return Array.prototype._reverse.call(this);
  }
  var nonenum = {enumerable: false};
  Object.defineProperties(Array.prototype, {
      _reverse: nonenum,
      reverse: nonenum,
  });
})();
