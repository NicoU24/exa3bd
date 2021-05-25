 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC4vNuMSC-pTFT35FvC3ybMDaik54rqpOw",
    authDomain: "unidad3firebase-5771f.firebaseapp.com",
    projectId: "unidad3firebase-5771f",
    storageBucket: "unidad3firebase-5771f.appspot.com",
    messagingSenderId: "682974527952",
    appId: "1:682974527952:web:0cd8a65630612a9194f9d5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var basedatos = firebase.database();

  var app = document.getElementById('app');

  /*var coleccion = firebase.database().ref().child('mensaje');
  coleccion.on('value', (snapshot)=>{
     console.log(snapshot.val())
  });*/

  /*var coleccion = basedatos.ref().child('Saludo');
  coleccion.on('value', (snapshot)=>{
    console.log(snapshot.val())

    app.innerText = snapshot.val();
});*/

function readval(){
    var coleccion = basedatos.ref().child('users/username/');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
    });
  }

  function readget(){
    basedatos.ref('users').child('username').get().then(function(snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
    }
    else {
      console.log("No data available");
      app.innerText = 'No data available';
    }
  }).catch(function(error) {
    console.error(error);
  });
}


function writecollection() {
    basedatos.ref('users').set({
      username: "ElNico",
      email: "Nicoelchingon@gmail.com",
    });
  }
  

  