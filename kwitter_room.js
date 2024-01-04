
var firebaseConfig = {
  apiKey: "AIzaSyDQpu80-2KSwsJAxVL2RosVVaBNjk7IhlE",
  authDomain: "classtest-534c8.firebaseapp.com",
  projectId: "classtest-534c8",
  storageBucket: "classtest-534c8.appspot.com",
  messagingSenderId: "389616795308",
  appId: "1:389616795308:web:7231d36674c66e3bcae909"
};

  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }
  var firebaseConfig = {
    apiKey: "AIzaSyDSXbO0L3H9OSKTlEyh33IQ5jEFaQsx4mw",
    authDomain: "kwitter-5e22d.firebaseapp.com",
    databaseURL: "https://kwitter-5e22d-default-rtdb.firebaseio.com",
    projectId: "kwitter-5e22d",
    storageBucket: "kwitter-5e22d.appspot.com",
    messagingSenderId: "36830644294",
    appId: "1:36830644294:web:7c9700ac8d235461aee247"
  };
  
  firebase.initializeApp(firebaseConfig);

  function addRoom()
{
    room_name = document.getElementById("room_name").Value;

    firebase.database().ref("/").child(room_name).update({
    purpose :"adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room name-"+ Room_names);
row="<div class='room name" id="+Room_names" onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.seItem("room_name", name);
    window.location = "kwitter_page,html";

}
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
<div>
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
         </div>

      
      function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  
  getData();
  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
  
        document.getElementById("msg").value ="";
  }
  

