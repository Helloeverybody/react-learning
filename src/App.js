import s from './App.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className={s.app_wrapper}>
              <Header />
              <Navbar />
              <div className={s.content}>
                  <Routes>
                      <Route path="/profile" element={<Profile />}/>
                      <Route path="/dialogs" element={<Dialogs />}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
