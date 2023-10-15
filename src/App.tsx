import React from 'react';
import MessageCreatePage from "./Pages/MessageCreatePage";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";
import Settings from "./Pages/Settings";



function App() {

  return (
      <Router >
          <Routes>
              <Route path={"/"} element={<MainPage/>} />
              <Route path={"/message"} element={ <MessageCreatePage/>}/>
              <Route path={"/search"} element={<SearchPage/>}/>
              <Route path={"/settings"} element={<Settings/>}/>
          </Routes>
      </Router>


  );
}

export default App;
