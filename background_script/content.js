
console.log("Chrome extension runnin")

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse){
    console.log(request);

    sendInfo();

}

//applications json should be a different file
let applicationsInFile = {
    "appls":[
        
    ]
}


//Properties 
let appSchema = {
    "JOBBOARD": "",
    "URL" : "",
    "TITLE": "",
    "COMPANY": "",
    "LOCATION": "",
    "DATEAPPLIED": ""
}

let temp = appSchema;




function sendInfo(){

    console.log("sendInfo was triggered")

    if (temp.URL == ""){
        console.log("temp is empty");
        console.log(temp);
        return;
    }

    applicationsInFile.appls.push(temp);
    console.log("app added to list");

    //reset temp to empty

    temp.LOCATION = "";
    temp.COMPANY = "";
    temp.DATEAPPLIED = "";
    temp.JOBBOARD = "";
    temp.TITLE = "";
    temp.URL = "";


    console.log("temp emptied");
    console.log(temp);
}
//triggers (move to different file)

function linkedInTrigger(){

    temp.JOBBOARD = "LinkedIn";
    console.log(temp.JOBBOARD);

    temp.URL = document.URL;
    console.log(temp.URL);
                
    
    console.log(document.getElementById('ember98'));

    titleElem = document.getElementsByClassName('t-24 t-bold jobs-unified-top-card__job-title').item(0);
    let TITLEEE = titleElem.textContent;
    console.log(TITLEEE);
    //temp.TITLE = titleElem.textContent.trim();

    companyElem = document.getElementsByClassName('ember-view t-black t-normal').item(0);
    temp.COMPANY = companyElem.textContent.trim();

    locationElem = document.getElementsByClassName('jobs-unified-top-card__bullet').item(0);
    temp.LOCATION = locationElem.textContent.trim();

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    temp.DATEAPPLIED= `${month}-${day}-${year}`;

    console.log(temp);

}

function triggerControl(){    //logic to pick correct trigger
    linkedInTrigger();        
}

if (document.readyState != 'loading') {
    console.log('document is already ready, just execute code here');
    triggerControl();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        triggerControl();
    });
}

/*
document.addEventListener('DOMContentLoaded', function() {
    console.log('page finished loading, starting trigger');
    triggerControl()
  });
*/
//setTimeout(linkedInTrigger(), 10000);


//make a separate file for all trigger funcs
//make control func to pick between trigger funcs based on document url