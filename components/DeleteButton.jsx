"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.error) {
      console.log(json.error);
    }

    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <button
      className="py-1 px-2 bg-red-400 text-white rounded mt-5 hover:bg-red-600"
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading && (
        <div className="flex items-center gap-2">
          <FaTrash />
          <span>Deleting...</span>
        </div>
      )}

      {!isLoading && (
        <div className="flex items-center gap-2">
          <FaTrash />
          <span>Delete</span>
        </div>
      )}
    </button>
  );
};

export default DeleteButton;
