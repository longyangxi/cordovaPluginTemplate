
var exec = require('cordova/exec');

var PLUGIN_NAME = 'PluginTemplate';

var PluginTemplate = {
  sayHello: function(words, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [words]);
  }
};

module.exports = PluginTemplate;
