import TicketCard from "@/components/TicketCard";
import { notFound } from "next/navigation";

const gettickets = async () => {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    notFound();
  }

  const tickets = await res.json();
  return tickets;
};

const tickets = async () => {
  const tickets = await gettickets();

  return (
    <main className="px-10 py-3 overflow-y-auto mt-28 sm:mt-20">
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
