import React from "react"
import { Link } from "gatsby"

import SidebarLayout from "../components/sidebarLayout"

const SecondPage = () => (
  <SidebarLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </SidebarLayout>
)

export default SecondPage
