import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_, { params }) {
  const res = await fetch(`http://localhost:4000/todos/${params.id}`);
  const todo = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { error: "Cannot find todo" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(todo, {
    status: 200,
  });
}
