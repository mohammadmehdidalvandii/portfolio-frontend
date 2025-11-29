import AdminLayout from "@layouts/AdminLayout/AdminLayout";
import Admin from "@page/Admin/Admin";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(()=>import('@page/Home/Home'));
const Login = lazy(()=>import('@page/Login/Login'));


function App() {
  return (
    <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Admin" element={<AdminLayout/>}>
          <Route index element={<Admin/>} />
        </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App