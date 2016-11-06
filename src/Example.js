'use strict';

exports.getElementById = function(id) {
  return function(){
    return document.getElementById(id);
  };
};

exports.hot = function() {
  if (module.hot) {
    module.hot.accept();
  }
}
