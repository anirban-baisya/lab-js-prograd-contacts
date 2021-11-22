//Enter your code here..

document.getElementById('btnGet').addEventListener('click',() => {
   
    const promise = new Promise((resolve, reject) => { // it retured 2 perameter resolve, reject
      
      //this is the part for request & send XMLHttpRequest
        const request = new XMLHttpRequest(); //XMLHttpRequest() class storing as an obj
      request.open("GET", "https://jsonplaceholder.typicode.com/users"); //accessing server file (1)
   
      request.onload = () => {//checking sever replied response
        if (request.status === 200) { //if response is ok
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.onerror = () => { //if there is error
        reject(Error("error fetching data"));
      };

      request.send();//sending user request to server (2)
    });



    promise.then( //promise.then it refres to resolve request
      (data) => { //this is for to diply data in list from
        console.log("promise executed");
        const result = JSON.parse(data);
        var player = `<h2>Lists of Users</h2>`;
        result.forEach(function (user) {
          player += `<div class="player">
                        <div class="strength">Name : ${user.name}</div>
                        <div>Email   : ${user.email}</div>
                        <div>Phone   : ${user.phone}</div>
                        <div>Website : ${user.website}</div>
                        <div>Company : ${user.company.name}</div>
                        <div>City    : ${user.address.city}</div>
                        <div>Zipcode : ${user.address.zipcode}</div>
                       </div>`;
        });
  
        document.getElementById('message').innerHTML = player;
      },
      (error) => { //it refres to reject request
        console.log("rejected");
        console.log(error.message);
      }
    );
  })