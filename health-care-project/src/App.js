import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import News from "./Pages/News";
import Solutions from "./Pages/Solutions";
import Doctor from "./Pages/Doctor";
import Eror404 from "./Pages/Eror404";
import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Detail from "./components/Admin/Detail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useDispatch } from "react-redux";
import { getUser } from "./services/createUserService";
import { useEffect } from "react";
import * as types from "./actions/index"

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    getUser().then(res=>dispatch(types.act_get_data(res.data)));
  },[]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="news" element={<News />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="doctor" element={<Doctor />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Eror404 />} />
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="/admin/:detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
