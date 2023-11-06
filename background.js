console.log("bg script running")

const url = "https://us-east-2.aws.data.mongodb-api.com/app/data-ksrwp/endpoint/data/v1/action/insertOne";

chrome.action.onClicked.addListener((tab) => {
  
  (async () => {
    const jobInfo = await chrome.tabs.sendMessage(tab.id, {status: "pressed"});
    console.log("message passed")
    console.log(jobInfo)

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "apiKey" : "kwJX5u7ti9s47aMCJMyGbetOAL8B5MGhMySfqusPZHq6QaUUmt3BFofUbRtShUxl",
        "Content-Type" : "application/ejson",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        dataSource: "AppTrackExtCluster1",
        database: "DB1",
        collection:"App-Track-Ext_tb1",
        document: {
          "status": "open",
          "text"  : "Do the dishes"
        }
      })
    });

    console.log(response)

  })();


});