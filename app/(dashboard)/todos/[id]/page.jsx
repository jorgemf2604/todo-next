import Link from "next/link";
import { notFound } from "next/navigation";

const getTodo = async (id) => {
  const res = await fetch(`http://localhost:4000/todos/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    notFound();
  }

  const todo = await res.json();
  return todo;
};

const Todo = async ({ params }) => {
  const todo = await getTodo(params.id);

  return (
    <main className="mt-28 sm:mt-20 p-8">
      <div className="rounded-lg shadow-lg bg-neutral-200 my-5 p-8 pb-12 relative">
        <h3 className="text-black text-xl font-semibold">{todo.title}</h3>
        <p className="mb-5">Create by {todo.user_email}</p>
        <p className="leading-6">{todo.body}</p>
        <span
          className={`absolute right-0 bottom-0 priority ${todo.priority}-priority`}
        >
          {todo.priority} priority
        </span>
      </div>
      <Link href="/todos">
        <button className="btn">Go Back</button>
      </Link>
    </main>
  );
};

export default Todo;
