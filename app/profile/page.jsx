"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { useRouter } from "next/navigation";
import NotesView from "../notes/page";

const page = () => {
  const router = useRouter();
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        <NotesView notes={[]} />
      ) : (
        <p className="flex flex-col justify-center items-center text-2xl font-semibold">Debes iniciar sesión para ver esto.</p>
      )}
    </div>
  );
};

export default page;
