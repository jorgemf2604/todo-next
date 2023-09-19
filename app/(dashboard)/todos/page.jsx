import TodoCard from "@/components/TodoCard";
import { notFound } from "next/navigation";

const getTodos = async () => {
  const res = await fetch("http://localhost:4000/todos", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    notFound();
  }

  const todos = await res.json();
  return todos;
};

const Todos = async () => {
  const todos = await getTodos();

  return (
    <main className="px-10 py-3 overflow-y-auto mt-28 sm:mt-20">
      <h2>ToDos</h2>
      <div>
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </div>
    </main>
  );
};

export default Todos;
