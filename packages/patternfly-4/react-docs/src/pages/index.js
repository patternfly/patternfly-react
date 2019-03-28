import React from "react"
import { Link } from "gatsby"

import SidebarLayout from "../components/sidebarLayout"

const IndexPage = () => (
  <React.Fragment>
    <SidebarLayout>
      <h1>Hi people</h1>
      <p>Welcome to React docs.</p>
      <p>Now go build something great.</p>
    </SidebarLayout>
  </React.Fragment>
)

export default IndexPage
