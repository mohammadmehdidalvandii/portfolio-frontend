import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(()=>import('@page/Home/Home'))


function App() {
  return (
    <BrowserRouter>
    <Suspense>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App