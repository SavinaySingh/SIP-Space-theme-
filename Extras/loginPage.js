firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
         document.getElementById("login").style.display="none";
         document.getElementById("logout").style.display="block";
        var user1 = firebase.auth().currentUser;
        if(user1!=null)
        var email=user1.email;
        document.getElementById("txt").innerText=email;

    } else {
        // No user is signed in.
        document.getElementById("login").style.display="block";
         document.getElementById("logout").style.display="none";


    }
});

function login() {
    var email1=document.getElementById("user").value;
    var password1=document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email1, password1).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(email1+" "+password1+" "+errorMessage);
    });

}


function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}