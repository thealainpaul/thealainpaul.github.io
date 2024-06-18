window.onload = function() {
  var link = top.document.createElement("link");
  link.type = "image/favicon.ico";
  link.rel = "shortcut icon";
  link.href = "./favicon.ico";
  top.document.getElementsByTagName("head")[0].appendChild(link);
}
