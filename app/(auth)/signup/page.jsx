"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (!error) {
      router.push("/verify");
    }
  };

  return (
    <main className=" h-screen flex items-start justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl">Welcome to ticket Master</p>
        <h2>Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-200 px-10 pt-10 pb-1 w-[280px] md:w-[400px] m-auto shadow-2xl rounded-md"
        >
          <label>
            <span className="font-semibold">Email:</span>
            <input
              className="w-full p-2 my-4 rounded"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span className="font-semibold">Password:</span>
            <input
              className="w-full p-2 my-4 rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="btn">Sign Up</button>
        </form>
      </div>
    </main>
  );
};
export default Signup;
