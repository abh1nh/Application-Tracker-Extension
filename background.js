console.log("bg script running")

const APIurl = "https://us-east-2.aws.data.mongodb-api.com/app/data-ksrwp/endpoint/data/v1/action/insertOne";
const url = 'https://corsproxy.io/?' + encodeURIComponent(APIurl);


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
        document: jobInfo
      })
    });

    console.log(response)

  })();


});