
console.log("Chrome extension runnin")

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

let validWebsite = false;

//Triggers
function linkedInTrigger(){   //logic to extract temp info from LinkedIn

    temp.JOBBOARD = "LinkedIn";
    //console.log(temp.JOBBOARD);

    temp.URL = document.URL;
    //console.log(temp.URL);
                


    titleElem = document.getElementsByClassName('t-24 t-bold job-details-jobs-unified-top-card__job-title').item(0);
    temp.TITLE = titleElem.textContent.trim();

    //console.log(document.getElementsByClassName('job-details-jobs-unified-top-card__primary-description'));
    companyElem = document.getElementsByClassName('job-details-jobs-unified-top-card__primary-description').item(0);
    temp.COMPANY = companyElem.textContent.split("·")[0].trim();

    locationElem = document.getElementsByClassName('jobs-unified-top-card__bullet').item(0);
    temp.LOCATION = locationElem.textContent.trim();

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    temp.DATEAPPLIED= `${month}-${day}-${year}`;

    console.log(temp);

}

function monsterTrigger(){    //logic to extract temp info from monster

  temp.JOBBOARD = "Monster";
  //console.log(temp.JOBBOARD);

  temp.URL = document.URL;
  //console.log(temp.URL);
              
  
  //console.log(document.getElementById('ember98'));

  titleElem = document.getElementsByClassName('headerstyle__JobViewHeaderTitle-sc-1ijq9nh-5 gZwGrM JobViewTitle').item(0);
  temp.TITLE = titleElem.textContent.trim();


  companyElem = document.getElementsByClassName('headerstyle__JobViewHeaderCompany-sc-1ijq9nh-6 bfsVOy').item(0);
  temp.COMPANY = companyElem.textContent.trim();

  locationElem = document.getElementsByClassName('headerstyle__JobViewHeaderLocation-sc-1ijq9nh-4 guqMDF').item(0);
  temp.LOCATION = locationElem.textContent.trim();
  

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  temp.DATEAPPLIED= `${month}-${day}-${year}`;

  console.log(temp);

}

function indeedTrigger(){     //logic to extract temp info from indeed

  temp.JOBBOARD = "Indeed";
  //console.log(temp.JOBBOARD);

  temp.URL = document.URL;
  //console.log(temp.URL);
              
  
  //console.log(document.getElementById('ember98'));

  titleElem = document.getElementsByClassName('jobsearch-JobInfoHeader-title css-1b4cr5z e1tiznh50').item(0);
  temp.TITLE = titleElem.textContent.trim();


  companyElem = document.getElementsByClassName('css-1l2hyrd e19afand0').item(0);
  temp.COMPANY = companyElem.textContent.trim();

  locationElem = document.getElementsByClassName('css-9yl11a eu4oa1w0').item(0);
  temp.LOCATION = locationElem.textContent.trim();
  

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  temp.DATEAPPLIED= `${month}-${day}-${year}`;

  console.log(temp);

}

function triggerControl(){    //logic to pick correct trigger
    URLStr = document.URL  

    if (URLStr.includes("linkedin")){
      console.log("linkedIn detected")
      validWebsite = true;
      linkedInTrigger();
    }
    else if (URLStr.includes("monster")){
      console.log("monster detected")
      validWebsite = true;
      monsterTrigger();
    }
    else if (URLStr.includes("indeed")){
      console.log("indeed detected")
      validWebsite = true;
      indeedTrigger();
    }
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

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.status === "pressed")
      console.log("received message in content. Message : "+request.status);
      sendResponse(temp);
  }
);









