import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Home from './components/home/Home';
import Login from './components/Login'
import Register from './components/Register';
import UserComponent from './components/UserComponent';
import HeaderComponents from './components/HeaderComponents';
import AssetComponent from './components/AssetComponent';
import CreateAssetComponent from './components/CreateAssetComponent';
import UpdateAssetComponent from './components/UpdateAssetComponent';

function App() {
 return (
 <Router>
 <div className="App">
 

 
 <nav id="head" class="navbar navbar-expand-lg navbar-light bg-info">
 <div class="container-fluid">
 <Link class="navbar-brand" href="#">Asset Management System</Link>
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
 aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
 </button>
 <div class="collapse navbar-collapse" id="navbarNav">
 <ul class="navbar-nav">
 <li class="nav-item">
 <Link class="nav-link" to="/home">Home</Link>
 </li>
 <li class="nav-item dropdown">
 <Link class="nav-link dropdown-toggle" to="login" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown"
 aria-expanded="false">Login</Link>
 <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
 <li><Link class="dropdown-item" to="login">Login</Link></li>
 <li><Link class="dropdown-item" to="register">Register</Link></li>
 </ul>
 </li>
 <li class="nav-item dropdown">
 <Link class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown"
 aria-expanded="false">Profile</Link>
 <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
 <li><Link class="dropdown-item" to="/userProfile">User Profile</Link></li>
 <li><Link class="dropdown-item" to="/editProfile">Edit Profile</Link></li>
 </ul>
 </li>
 <li class="nav-item dropdown">
 <Link class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown"
 aria-expanded="false">Assets</Link>
 <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
      {/* <Router>
 <HeaderComponents/>
 <div className="container">
 
 </div>
</Router> */}
 <li><Link class="dropdown-item" to="/assets">Current Assets</Link></li>
 <li><Link class="dropdown-item" to="/add-assets">Add Assets Details</Link></li>
 </ul>
 </li>
 <li class="nav-item dropdown">
 <Link class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown"
 aria-expanded="false">Result</Link>
 <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
 <li><Link class="dropdown-item" to="/results">Generate Result</Link></li>
 <li><Link class="dropdown-item" to="view">View Report</Link></li>
 </ul>
 </li>

 </ul>
 </div>
 </div>
</nav>
<nav id="options">
<Switch>
 {/* <Route exact path="/home" component={Home} /> */}
 <Route exact path="/login" component={Login} />
 <Route exact path="/register" component={Register} />
  <Route exact path="/userProfile" component={UserComponent} />
 
                 <Route path = "/asset" component = {AssetComponent}></Route>
                   <Route path = "/add-assets" component = {CreateAssetComponent}></Route>
                   <Route path = "/update-assets/:id" component = {UpdateAssetComponent}></Route>
                


 
 {/* <UserLogin />  */}

 </Switch>
 
 </nav>
 </div>
 </Router>
);
}

 export default App
// import React from 'react';
// import './App.css';
// import HeaderComponents from './components/HeaderComponents';
// import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
// import Login from './components/Login';
// import AssetComponent from './components/AssetComponent';
// import CreateAssetComponent from './components/CreateAssetComponent';
// import UpdateAssetComponent from './components/UpdateAssetComponent';



// function App() {
//   return (
    
// <div>
// <Router>
//       <HeaderComponents/>
//         <div className="container">
//             <Switch> 
//                   <Route path = "/" exact component = {AssetComponent}></Route>
//                   <Route path = "/asset" component = {AssetComponent}></Route>
//                   <Route path = "/add-assets" component = {CreateAssetComponent}></Route>
//                   <Route path = "/update-assets/:id" component = {UpdateAssetComponent}></Route>
                
//             </Switch>
//         </div>
// </Router>
// </div>
      
   
//   );
// }

// export default App;
