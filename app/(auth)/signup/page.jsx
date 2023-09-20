const Signup = () => {
  return (
    <main className=" h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl">Welcome to ToDo Master</p>
        <h2>Sign Up</h2>
        <form className="bg-neutral-200 px-10 pt-10 pb-1 w-[280px] md:w-[400px] m-auto shadow-2xl rounded-md">
          <label>
            <span className="font-semibold">Email:</span>
            <input className="w-full p-2 my-4 rounded" type="email" />
          </label>
          <label>
            <span className="font-semibold">Password:</span>
            <input className="w-full p-2 my-4 rounded" type="password" />
          </label>
          <button className="btn">Sign Up</button>
        </form>
      </div>
    </main>
  );
};
export default Signup;
