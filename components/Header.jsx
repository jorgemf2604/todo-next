import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { BiUser } from "react-icons/bi";

const Header = ({ user }) => {
  return (
    <nav className="flex flex-col items-center gap-3 h-26 py-5 px-10 bg-neutral-600/50 z-10 text-white fixed left-0 right-0 sm:flex-row sm:justify-between sm:h-20">
      <div className="flex gap-4 items-center text-2xl mb-3 sm:text-3xl">
        <span>🎟️</span>
        <span className="text-white">Ticket master</span>
      </div>
      <div className="flex gap-8 text-lg">
        <Link href="/">Home</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create</Link>
      </div>
      <div className="flex items-center justify-center gap-6">
        <span className="text-sm text-white block bg-black px-2 py-2 rounded flex items-center gap-1">
          <BiUser />
          {user}
        </span>
        <LogoutButton className="relative top-7" />
      </div>
    </nav>
  );
};

export default Header;
