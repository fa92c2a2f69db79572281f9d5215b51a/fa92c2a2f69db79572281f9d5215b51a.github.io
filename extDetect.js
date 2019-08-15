var url_string = window.location.href;
var url = new URL(url_string);
var origin = url.searchParams.get("url")
var encodedIn = atob(orgin);
var encodedFilter1 = encodedIn.replace(/=/g, "_")
var encodedFilter2 = encodedFilter1.replace(/-/g, "+")
var encodedFilter3 = encodedFilter2.replace()
var file = decodedOut;
fileType = file.slice(file.lastIndexOf(".") + 1);
//CHECK IF FILE EXTENSION MATCHES SUPPORTED EXTENSIONS

var isSupported = "false" // set "isSupported" to false by default, later to be made true if any of the checks are successful.

//CHECK FOR IMAGE
if ((fileType === "apng") || (fileType === "bmp") || (fileType === "gif") || (fileType === "ico") || (fileType === "jpeg") || (fileType === "jpg") || (fileType === "jfif ") || (fileType === "png") || (fileType === "svg") || (fileType === "webp")) {
    console.log("[STREAM] [INFO] File detected is an image");
    var isSupported = "true";
    var dataType = "image";
}

//CHECK FOR VIDEO
if ((fileType === "mp4") || (fileType === "ogg") || (fileType === "webm")) {
    console.log("[STREAM] [INFO] File detected is a video");
    var isSupported = "true";
    var dataType = "video";
    //DEFINE AUDIO MIME TYPES
    if (fileType === "mp4") {
        var mimeType = "video/mp4"
    }
    if (fileType === "webm") {
        var mimeType = "video/webm"
    }
    if (fileType === "ogg") {
        var mimeType = "video/ogg"
    }
}
//CHECK FOR AUDIO
if ((fileType === "mp3") || (fileType === "ogg") || (fileType === "wav")) {
    console.log("[STREAM] [INFO]File detected is audio");
    var isSupported = "true";
    var dataType = "audio";
    //DEFINE AUDIO MIME TYPES
    if (fileType === "mp3") {
        var mimeType = "audio/mpeg"
    }
    if (fileType === "ogg") {
        var mimeType = "audio/ogg"
    }
    if (fileType === "wav") {
        var mimeType = "audio/wav"
    }
}
//IS THE FILE ACTUALLY SUPPORTED?
if (isSupported === "false") {
    console.error("[STREAM] [ERROR] File extension not recognised");
}
if (isSupported === "true") {
    console.log("[STREAM] [INFO] " + "File type detected (" + fileType + ")");
    if (mimeType !== "undefined") {
        console.log("[STREAM] [INFO] " + "MIME type detected (" + mimeType + ")");
    }
}
//SORT OUT RENDERING
if ((isSupported === "true" && dataType === "image")) {
    document.write("<img src=" + file + " alt=\"Image Stream\" width=\"100%\">");
}
if ((isSupported === "true" && dataType === "video")) {
    document.write('<video width=\"100%\" height=\"100%\" style=\"margin: 0px;\" controls>\n');
    document.write("<source src=" + file + " type=" + mimeType + ">");
    document.write('Your browser does not support the video tag.\n');
    document.write('</video>');
}
if ((isSupported === "true" && dataType === "audio")) {
    document.write('<audio controls>\n');
    document.write("<source src=" + file + " type=" + mimeType + ">");
    document.write('Your browser does not support the audio tag.\n');
    document.write('</audio>');
}
var stylesheet = location.pathname.split("/").pop();

var meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width");
document.getElementsByTagName("head").appendChild(meta);
//<meta name="viewport" content="width=device-width">