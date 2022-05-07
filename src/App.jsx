import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Addblog from "./components/Addblog";
import Auth from "./components/Auth";
import Blogdetails from "./components/Blogdetails";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Userblog from "./components/Userblog";
function App() {
  const isloggedin = useSelector((state) => state.isLoogedIn);
  console.log(isloggedin);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/add" element={<Addblog />} />
        <Route path="/userblog" element={<Userblog />} />
        <Route path="/blogdetail/:id" element={<Blogdetails />} />
      </Routes>
    </>
  );
}

export default App;
