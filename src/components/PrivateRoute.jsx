import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../service/auth"

const PrivateRoute = ({ component: Component, location, ...rest}) => {
  if (!isLoggedIn() && location.pathname !== `/login/auth`) {
    navigate("/login/auth")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute