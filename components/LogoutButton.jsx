"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <button
      className=" bg-red-400 text-white rounded px-2 py-1 block text-xl hover:bg-red-600"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
