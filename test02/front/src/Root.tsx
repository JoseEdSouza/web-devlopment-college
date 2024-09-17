import React from "react"
import NavBar from "./Components/Navbar"
import { Outlet } from 'react-router-dom'

const Root = ({ children }: { children?: React.ReactNode}) => {
  return(
    <>
      <NavBar/>
      <main>
        { children ?? <Outlet/>}
      </main>
    </>
  )
}

export default Root