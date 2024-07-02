import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full font-semibold flex items-center justify-between p-2 shadow-md">
      <ul className="flex">
        {loading ? null : !user ? (<li className="bg-transparent hover:text-slate-500 p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>) : (<div></div>)}

        <li className="bg-transparent hover:text-slate-500 p-2 cursor-pointer">
          <Link href="/about">Acerca de</Link>
        </li>

        {!user ? null : (
          <li className="bg-transparent hover:text-slate-500 p-2 cursor-pointer">
            <Link href="/profile">Perfil</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={
            handleSignIn
          } className="bg-transparent hover:text-slate-500 p-2 cursor-pointer">
            Iniciar sesión
          </li>
        </ul>
      ) : (
        <div>
          <p>Bienvenido, {user.displayName}</p>
          <p className="bg-slate-300 py-2 rounded-md flex justify-center hover:text-slate-500 cursor-pointer" onClick={handleSignOut}>
            Cerrar sesión
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
