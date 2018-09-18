(function() {
  if (navigator.userAgent.indexOf('; CPU OS 12 ') === -1) return;
  var reverse = Array.prototype.reverse;
  Array.prototype.reverse = function() {
    this.push.apply(this, reverse.call(this.splice(0)));
    return this;
  }
})();