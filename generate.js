/**
 * Created by long on 17/2/18.
 */


/***
 * usage: node generate.js cordova-plugin-myPlugin myPlugin
 *
 * */

var cmdProcess = require('child_process');
var fs = require("fs");
var path = require("path");

var TEMPLATE_ID = "cordova-plugin-template";
var TEMPLATE_NAME = "PluginTemplate"
var TEMPLATE_DES = "a cordova plugin template"

var args = process.argv.slice(2);

var pluginId = args[0] || TEMPLATE_ID;
var pluginName = args[1] || TEMPLATE_NAME;
var pluginDes = args[2] || TEMPLATE_DES;


var ncp = require('ncp').ncp;

removeTemplate("./" + pluginName);

ncp.limit = 16;
ncp("./template", "./" + pluginName, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("***********copy template ok");
    editTemplate("./" + pluginName)
});

function removeTemplate(file){
    if(!fs.existsSync(file)) return;
    var stat = fs.lstatSync(file);
    if(stat.isDirectory()) {
        var files = fs.readdirSync(file);
        for(var i = 0; i < files.length; i++) {
            var f = file + "/" + files[i];
            removeTemplate(f);
        }
    } else {
        fs.unlinkSync(file);
    }
}

function editTemplate(file){
    var stat = fs.lstatSync(file);
    if(stat.isDirectory()) {
        var files = fs.readdirSync(file);
        for(var i = 0; i < files.length; i++) {
            var f = file + "/" + files[i];
            editTemplate(f);
        }
    } else {
        editFile(file);
    }
}

var dataExts = ['.json', '.xml'];
var langExts = [".h", ".m", ".java", ".js"]
function editFile(file) {
    var i = file.lastIndexOf(".");
    if(i > 0) {
        var ext = file.substring(i);
        if(dataExts.indexOf(ext) > -1 || langExts.indexOf(ext) > -1) {

            var txt = fs.readFileSync(file, "utf8");

            var reg = new RegExp(TEMPLATE_ID, "g");
            txt = txt.replace(reg, pluginId);

            reg = new RegExp(TEMPLATE_NAME, "g");
            txt = txt.replace(reg, pluginName);

            reg = new RegExp(TEMPLATE_DES, "g");
            txt = txt.replace(reg, pluginDes);

            fs.writeFileSync(file, txt);

            if(langExts.indexOf(ext) > -1) {
                reg = new RegExp(TEMPLATE_NAME, "g");
                var nFile = file.replace(reg, pluginName);
                fs.renameSync(file, nFile);
            }
        }
    }
}

//var lastArg = null;
//for(var i = 0; i < args.length; i++) {
//    var arg = args[i];
//    if(lastArg == "-p") {
//        Config.platform = arg;
//    } else if(lastArg == "-m") {
//        Config.useJSC = arg == "release";
//    } else if(lastArg == "-ant") {
//        Config.useAnt = arg == "true";
//    }
//    lastArg = arg;
//}