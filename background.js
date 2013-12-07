var url = chrome.extension.getURL("script/myscript.js");

var s = document.createElement('script'); 
s.id = 'fixed-header'; 
s.src = url; 
document.getElementsByTagName('head')[0].appendChild(s);
