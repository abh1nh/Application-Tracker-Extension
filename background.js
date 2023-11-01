console.log("bg script running")

//"*://www.linkedin.com/jobs/collections/*",
//"*://www.linkedin.com/jobs/search/*",


/*
import { MongoClient, ServerApiVersion } from './node_modules/mongodb/mongodb';


const uri = "mongodb+srv://abhinh:AHN123@apptrackextcluster1.jtwyg2y.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/


fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});

const url = "https://us-east-1.aws.data.mongodb-api.com/app/application-0-xpnoc/endpoint/data/v1";

chrome.action.onClicked.addListener((tab) => {
  
  (async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const jobInfo = await chrome.tabs.sendMessage(tab.id, {status: "pressed"});
    console.log("message passed")
    console.log(jobInfo)

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        yo:true,
        title:"example"
      })
    });

    console.log(response)

  })();


});