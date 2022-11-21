import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import styled from "styled-components";
import {Purple} from "./colors/Colors.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createContext, useState} from "react";

export const UserContext = createContext();



export default function App(){
    const [user, setUser] = useState(null);
    return (
       <BrowserRouter>
       <UserContext.Provider value={{user, setUser}}>
       <Routes>
              {/* <Route path="/" element={<Login/>}/>
              <Route path="/sign-up" element={<SignUp/>}/> */}
              <Route path="/accounts" element={<Main/>}/>
              <Route path="/new-in" element={<NewIn/>}/>
              <Route path="/new-out" element={<NewOut/>}/>
       </Routes>
       </UserContext.Provider>
       </BrowserRouter>
       

       
       
    );
}

