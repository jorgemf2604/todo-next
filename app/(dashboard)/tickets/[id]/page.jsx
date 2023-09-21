import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import DeleteButton from "@/components/DeleteButton";

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: ticket } = await supabase
    .from("tickets")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `${ticket?.title || "Ticket not Found"}`,
  };
}

const getTicket = async (id) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase
    .from("tickets")
    .select()
    .eq("id", id)
    .single();

  if (!data) {
    notFound();
  }

  return data;
};

const ticket = async ({ params }) => {
  const ticket = await getTicket(params.id);

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main className="mt-28 sm:mt-20 p-8">
      <div className="rounded-lg shadow-lg bg-neutral-200 my-5 p-8 pb-12 relative">
        <h3 className="text-black text-xl font-semibold">{ticket.title}</h3>
        <p className="mb-5">Create by {ticket.user_email}</p>
        <p className="leading-6">{ticket.body}</p>
        <span
          className={`absolute right-0 bottom-0 priority ${ticket.priority}-priority`}
        >
          {ticket.priority} priority
        </span>
        {data.session.user.email === ticket.user_email && (
          <DeleteButton id={params.id} />
        )}
      </div>
      <Link href="/tickets">
        <button className="btn">Go Back</button>
      </Link>
    </main>
  );
};

export default ticket;
