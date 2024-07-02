"use client"
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";

export const Providers = ({ children }) => {
  return (
    <AuthContextProvider>
      <Navbar />
      {children}
    </AuthContextProvider>
  )
}