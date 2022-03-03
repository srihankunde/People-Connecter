var firebaseConfig = {
      apiKey: "AIzaSyBR0qZtLayoVi_MhIGarX25Mn9ovlwt_es",
      authDomain: "people-connecter.firebaseapp.com",
      databaseURL: "https://people-connecter-default-rtdb.firebaseio.com",
      projectId: "people-connecter",
      storageBucket: "people-connecter.appspot.com",
      messagingSenderId: "420470379109",
      appId: "1:420470379109:web:f194022f0241336c596c8c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

      function addRoom(){

            room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
           purpose:"Adding Room Name"
            });

            localStorage.setItem("room_name" ,room_name );

            window.location="kwitter_page.html";
      }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Names :"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;


      //End code
      });});}

getData();

function redirectToRoom(name){

      console.log(name);

      localStorage.setItem("room_name" ,name );

            window.location="kwitter_page.html";
            
}


function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

}
