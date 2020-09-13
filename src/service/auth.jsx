// src/services/auth.js

const USER = process.env.GATSBY_USER
const PASS = process.env.GATSBY_PASS

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === USER && password === PASS) {
    return (
      setUser({
        username: `grandelfino`,
        name: `Grandelfino`,
        email: `grandelfino@kit.ac.jp`,
      })
    )
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = (callback) => {
  setUser({})
  callback()
}