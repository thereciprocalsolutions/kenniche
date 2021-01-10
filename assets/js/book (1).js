  var firebaseConfig = {
    apiKey: "AIzaSyCs942o5j1RaeMeWNZdMA_EoKEWSL_H6Ao",
    authDomain: "contactform-4160c.firebaseapp.com",
    databaseURL: "https://contactform-4160c.firebaseio.com",
    projectId: "contactform-4160c",
    storageBucket: "contactform-4160c.appspot.com",
    messagingSenderId: "289550506731",
    appId: "1:289550506731:web:a17e91da3d503f84237cae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('contact-kenniche');
  
  // Listen for form submit
  document.getElementById('bookingForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var email = getInputVal('email');
    var sub = getInputVal('sub');
    var msg = getInputVal('msg');
  
  
    // Save message
    saveMessage(name, phone, email,  sub, msg);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    
    
  
    // Hide alert after 3 seconds
    setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
    },2000);
    
  //  window.open('https://intercityriders.com/bookingSuccess.html', '_blank');
  
    // Clear form
    document.getElementById('bookingForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, phone, email,  sub, msg){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      email:email,
      sub:sub,
      msg:msg

    });
  }