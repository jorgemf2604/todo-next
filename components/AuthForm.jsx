import { useState } from "react";

const AuthForm = ({ handleSubmit, message }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => handleSubmit(e, email, password)}
      className="bg-neutral-200 px-10 pt-10 pb-1 w-[280px] md:w-[400px] m-auto shadow-2xl rounded-md"
    >
      <label>
        <span className="font-semibold">Email:</span>
        <input
          className="w-full p-2 my-4 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span className="font-semibold">Password:</span>
        <input
          className="w-full p-2 my-4 rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="btn">{message}</button>
    </form>
  );
};

export default AuthForm;
