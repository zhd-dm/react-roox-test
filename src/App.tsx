import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import UsersPage from "./components/UsersPage/UsersPage";
import UserDetailPage from "./components/UserDetailPage/UserDetailPage";
import './App.scss';

const App = () => {
  return (
    // <BrowserRouter>
    //   <div>
    //     <Route path={'/users'}>
    //       <UsersPage/>
    //     </Route>
    //     <Route path={'/users/:id'}>
    //       <UserDetailPage/>
    //     </Route>
    //   </div>
    // </BrowserRouter>
    <div className="main-wrapper">
      <Sidebar />
      <UsersPage/>
    </div>
  );
}

export default App;
