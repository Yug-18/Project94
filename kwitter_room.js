var firebaseConfig = {
    apiKey: "AIzaSyBg58APbVPZWEkay0gMM0hlUVkik4nRcIY",
    authDomain: "lets-chat-web-app-23c08.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-23c08-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-23c08",
    storageBucket: "lets-chat-web-app-23c08.appspot.com",
    messagingSenderId: "323869577933",
    appId: "1:323869577933:web:4d43b0e233f79ac69d8f84"
  };
  
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username") ; 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom()
{
    var username = document.getElementById("user_name").value ;
    localStorage.setItem("roomname", room_name) ; 
    window.location = "kwitter_page.html";
    
    firebase.database().rel("/").child(room_name).update({
        purpose: "Adding Room Name"
    })
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

            });
      });
}
getData();