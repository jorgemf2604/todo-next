import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const res = await fetch(`http://localhost:4000/tickets/${params.id}`);

  if (!res.ok) {
    notFound();
  }

  const ticket = await res.json();

  return {
    title: ticket.title,
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket) => {
    id: ticket.id;
  });
}

const getticket = async (id) => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  const ticket = await res.json();
  return ticket;
};

const ticket = async ({ params }) => {
  const ticket = await getticket(params.id);

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
      </div>
      <Link href="/tickets">
        <button className="btn">Go Back</button>
      </Link>
    </main>
  );
};

export default ticket;
