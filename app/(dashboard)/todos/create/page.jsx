const CreateTodo = () => {
  return (
    <main className="mt-28 sm:mt-20 p-8">
      <h2>Create ToDO</h2>
      <form className="bg-neutral-200 px-10 pt-10 pb-1 md:w-1/2 xl:w-1/3  m-auto shadow-2xl rounded-md">
        <label>
          <span className="font-semibold text-lg">Title: </span>
          <input type="text" className="w-full p-2 my-4 rounded" />
        </label>{" "}
        <label>
          <span className="font-semibold text-lg">Body: </span>
          <textarea className="w-full h-[100px] p-2 my-4 rounded"></textarea>
        </label>
        <label>
          <p className="font-semibold text-lg mb-1">Priority: </p>
          <select name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button className="btn">Create ToDo</button>
      </form>
    </main>
  );
};

export default CreateTodo;
