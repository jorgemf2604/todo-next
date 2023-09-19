"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const newTodo = {
      title,
      body,
      priority,
      user_email: "jorge@mail.com",
    };

    const res = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/todos");
    }
  };

  return (
    <main className="mt-28 sm:mt-20 p-8">
      <h2>Create ToDO</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-200 px-10 pt-10 pb-1 md:w-1/2 xl:w-1/3  m-auto shadow-2xl rounded-md"
      >
        <label>
          <span className="font-semibold text-lg">Title: </span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 my-4 rounded"
          />
        </label>{" "}
        <label>
          <span className="font-semibold text-lg">Body: </span>
          <textarea
            className="w-full h-[100px] p-2 my-4 rounded"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <label>
          <p className="font-semibold text-lg mb-1">Priority: </p>
          <select
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button className="btn" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add ToDo</span>}
        </button>
      </form>
    </main>
  );
};

export default CreateTodo;
