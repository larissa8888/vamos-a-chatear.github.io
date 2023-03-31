// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDkli6Xe5NawlJUh_yMpy6NFwry4pan1mI",
  authDomain: "proyecto-kwitter-bb22a.firebaseapp.com",
  databaseURL: "https://proyecto-kwitter-bb22a-default-rtdb.firebaseio.com",
  projectId: "proyecto-kwitter-bb22a",
  storageBucket: "proyecto-kwitter-bb22a.appspot.com",
  messagingSenderId: "145733654288",
  appId: "1:145733654288:web:2c1f7bca94396df04e3795"
};

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="!Bienvenid@ "+ user_name +"!";

function addRoom()
 {
 room_name=document.getElementById("room_name").value ;
 firebase.database().ref("/").child(room_name).update({ purpose: "creando sala nueva" });
 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Inicio del código
    console.log("Room_name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>" ;
    document.getElementById("output").innerHTML += row;
    //Final del código
    });});}
getData();
function redirectToRoomName(name) {
console.log(name); 
localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
 }
 function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
 }