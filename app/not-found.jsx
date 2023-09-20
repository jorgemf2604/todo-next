import Link from "next/link";

const NotFound = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col  items-center">
        <h2 className="text-6xl">Page not found</h2>
        <p className="text-2xl mb-4">Sorry, something went wrong...</p>
        <Link href="/">
          <button className="btn">Go Home</button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
