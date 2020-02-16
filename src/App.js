import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import Routes from './APPROUTES/Routes';
// ...
import { messaging } from "./src/Config/Firebase";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}
  function App(){
    useEffect(()=>{
      messaging.requestPermission()
    .then(async function() {
      const token = await messaging.getToken();
      localStorage.setItem('@firebaseToken',token); 
      //console.log(token)
    })
    .catch(function(err) {
      console.log("Unable to get permission to notify.", err);
    });
  navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    },[])
    return(
     <Routes />
    );
}

export default App;