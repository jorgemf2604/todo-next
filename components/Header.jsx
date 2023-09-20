import Link from "next/link";

const Header = ({ user }) => {
  return (
    <nav className="flex flex-col items-center h-22 py-5 px-10 bg-neutral-600/50 z-10 text-white fixed left-0 right-0 sm:flex-row sm:justify-between sm:h-20">
      <div className="flex gap-4 items-center text-2xl sm:text-3xl">
        <span>🎟️</span>
        <span className="text-white">Ticket master</span>
        <span className="text-xs text-black">{user}</span>
      </div>
      <div className="flex gap-8 text-lg">
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create</Link>
      </div>
    </nav>
  );
};

export default Header;
