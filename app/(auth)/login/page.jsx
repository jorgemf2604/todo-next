"use client";

import AuthForm from "@/components/AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [loginError, setLogginError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setLogginError("");
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLogginError(error.message);
    }

    if (!error) {
      router.push("/");
    }
  };

  return (
    <main>
      <p className="text-2xl text-center">Welcome to ticket Master</p>
      <h2 className="text-center">Log in</h2>
      <AuthForm handleSubmit={handleSubmit} message="Log in" />
      {loginError && (
        <div className="error text-center text-2xl mt-5">{loginError}</div>
      )}
    </main>
  );
};

export default Login;
