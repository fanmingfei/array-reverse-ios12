(function() {
  if (navigator.userAgent.indexOf('; CPU OS 12 ') === -1) return;
  Array.prototype._reverse = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    this.length = this.length;
    return this._reverse();
  }
  const nonenum = {enumerable: false};
  Object.defineProperties(Array.prototype, {
	  _reverse: nonenum,
	  reverse: nonenum,
  });
})();
