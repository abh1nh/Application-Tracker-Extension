document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("button1").addEventListener("click", function(){  //view applications
        alert("view applications was clicked")
    })

    document.getElementById("button2").addEventListener("click", function(){ // add application
        let newStr = "yoooo add app button pressed";
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, newStr);
        })

    });
});