import Link from "next/link";

const TicketCard = ({ id, user_email, body, title, priority }) => {
  return (
    <Link href={`/tickets/${id}`}>
      <div className="rounded-lg shadow-lg bg-neutral-200 my-5 p-8 pb-12 relative hover:bg-slate-300 hover:translate-x-4 transition duration-200">
        <h3 className="text-black text-xl font-semibold">{title}</h3>
        <p className="mb-5">Create by {user_email}</p>
        <p className="leading-6">{body.slice(0, 200)}...</p>
        <span
          className={`absolute right-0 bottom-0 priority ${priority}-priority`}
        >
          {priority} priority
        </span>
      </div>
    </Link>
  );
};

export default TicketCard;
