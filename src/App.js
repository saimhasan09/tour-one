import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import PagenotFound from './Components/PagenotFound/PagenotFound';
import Header from './Components/Header/Header';
import AddService from './Components/AddService/AddService';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import MyOrder from './Components/MyOrder/MyOrder';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className='w-100'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
            <PrivateRoute path='/placeOrder/:serviceId'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/myOrder'>
              <MyOrder></MyOrder>
            </Route>
            <PrivateRoute path='/manageOrder'>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <Route path="*">
              <PagenotFound></PagenotFound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;