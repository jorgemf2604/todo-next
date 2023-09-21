import TicketCard from "@/components/TicketCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

const getTickets = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("tickets").select();

  if (error) {
    console.log(error.message);
    notFound();
  }

  return data;
};

const tickets = async () => {
  const tickets = await getTickets();

  return (
    <main className="px-10 py-3 overflow-y-auto mt-44 sm:mt-20">
      <h2>Tickets</h2>
      <div>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} {...ticket} />
        ))}
      </div>
    </main>
  );
};

export default tickets;
