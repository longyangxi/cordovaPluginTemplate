/**
 * Created by long on 17/2/18.
 */

var cmdProcess = require('child_process');
var fs = require("fs");
var path = require("path");

var pluginId = "cordova-plugin-template";
var pluginName = "PluginTemplate"
var pluginDes = "This is a cordova plugin template"

var args = process.argv.slice(2);

var lastArg = null;
for(var i = 0; i < args.length; i++) {
    var arg = args[i];
    if(lastArg == "-p") {
        Config.platform = arg;
    } else if(lastArg == "-m") {
        Config.useJSC = arg == "release";
    } else if(lastArg == "-ant") {
        Config.useAnt = arg == "true";
    }
    lastArg = arg;
}