$(document).ready(function() {
    const counter_endpoint ="https://hpb5sqhd88.execute-api.us-east-1.amazonaws.com/testing/visitorcounter"
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({});
    const counterRequestOptions = {
        method: "POST",
        body
        }; 

    var counterLabel = $(".badge.badge-info");
    //console.log('counterLabel', counterLabel[0], json.response.count)
    //counterLabel[0].textContent = "Loading...";

    // fetch the total number of visitors
    fetch(counter_endpoint, counterRequestOptions)
        .then((response) => {
            if (!response.ok) throw new Error("Error in fetch for visitor counter");
            return response.json();
        })
        .then((response) => {
            message = JSON.stringify({response})
            json = JSON.parse(message);
            console.log('counter response', json.response.count);
            counterLabel[0].textContent = json.response.count;
        })
        .catch((error) => {
            console.log(error);
            counterLabel[0].textContent = error;
        });     
  });


