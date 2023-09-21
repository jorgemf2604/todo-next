import Header from "@/components/Header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DahboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  const user = data.session === null ? "guest" : data.session.user.email;

  if (!data.session) {
    redirect("/login");
  }

  return (
    <main>
      <Header user={user} />
      <div className="h-screen bg-neutral-50 overflow-y-auto">{children}</div>
    </main>
  );
};

export default DahboardLayout;
