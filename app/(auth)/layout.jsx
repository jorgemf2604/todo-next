import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return (
    <main className="h-screen bg-neutral-50 overflow-y-auto">
      <nav className="flex gap-8 text-lg justify-end p-3 mr-6">
        <Link
          href="/login"
          className="border-4 border-black hover:border-transparent"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="border-4 border-black hover:border-transparent"
        >
          Signup
        </Link>
      </nav>
      {children}
    </main>
  );
};

export default AuthLayout;
