function redirect() {
    // Redirect to the specified website
    //console.log("redirect button pressed")    
    window.open('http://www.google.com');
  }
  
function runScript() {
    // Send a message to the content script to run
    //console.log("run script button pressed")

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'runScript' });
    });
  }
  

document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("redirectButton").addEventListener("click", redirect);

    document.getElementById("runScriptButton").addEventListener("click", runScript);

});





