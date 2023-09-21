"use client";

import AuthForm from "@/components/AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `https://todo-next-self.vercel.app/api/auth/callback`,
      },
    });

    router.refresh();

    if (!error) {
      router.push("/verify");
    }
  };

  return (
    <main className=" h-screen flex items-start justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl">Welcome to ticket Master</p>
        <h2>Sign Up</h2>
        <AuthForm handleSubmit={handleSubmit} message="Sign up" />
      </div>
    </main>
  );
};
export default Signup;
