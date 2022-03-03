//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send(){

      msg=document.getElementById("msg").value;

firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
    }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4' >"+message+"</h4>";
button_tag="<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span></button>";
row=name_tag+message_tag+button_tag+span_tag; 
document.getElementById("output").innerHTML+=row;



//End code
      } });  }); }
getData();

function update_like(message_id)
{
      console.log("Clicked on Like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({

            like: updated_likes

      });
}


function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

      
}