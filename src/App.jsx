import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import '../src/styles/Home.css'
import '../src/styles/SingleJob.css'
import SingleJob from "./components/singleJob"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/jobs/:id" element={<SingleJob></SingleJob>}></Route>
      </Routes>
    </>
  )
}

export default App
