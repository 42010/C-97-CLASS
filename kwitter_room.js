user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome"+" "+user_name;

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyASXn3qMYascMv-T7DI4mX_zPRvYZ0-c3w",
      authDomain: "kwitter-practice-bde08.firebaseapp.com",
      databaseURL: "https://kwitter-practice-bde08-default-rtdb.firebaseio.com",
      projectId: "kwitter-practice-bde08",
      storageBucket: "kwitter-practice-bde08.appspot.com",
      messagingSenderId: "737090073592",
      appId: "1:737090073592:web:895ea7a96922a30e32dc0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names);
                  row = "<div class ='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Add Room Name"
      });

      localStorage.setItem("room_Name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(room) {
      console.log(room);
      localStorage.setItem("room_name", room);
      window.location = "kwitter_page.html"
}     

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
       window.location = "index.html";     
}