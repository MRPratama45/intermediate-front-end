import {BrowserRouter, Routes, Route} from "react-router"
import Dashboard from "./Pages/dashboard"



function RouteMaster() {

  return (
    <>
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
    </>
  )
}

export default RouteMaster
