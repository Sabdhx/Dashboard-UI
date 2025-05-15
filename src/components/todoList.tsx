import React, { useEffect, useState } from "react";
import { supabase } from "../supabase-client";

type Props = {};
type data = {
  id: string;
  title: string;
  description: string;
};

function TodoList({}: Props) {
  const [Data, setData] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState<any[]>([]);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  const fetchData = async () => {
    const { data, error } = await supabase.from("todoList").select("*");
    if (error) console.error("Error fetching data", error);
    setTasks(data || []);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("todoList").delete().eq("id", id);
    if (error) console.error("Delete error:", error);
    alert("Task deleted successfully");
    fetchData(); // No need for reload
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("todoList")
      .insert(Data)
      .single();
    if (error) console.error("Insert error:", error.message);
    setData({ title: "", description: "" });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center py-10 space-y-6">
      <h1 className="text-2xl font-bold">Task Manager CRUD</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={Data.title}
          onChange={(e) => setData({ ...Data, title: e.target.value })}
          className="w-full px-4 py-2 border border-black rounded-md placeholder-gray-500"
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={Data.description}
          onChange={(e) => setData({ ...Data, description: e.target.value })}
          className="w-full px-4 py-2 border border-black rounded-md placeholder-gray-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full  bg-gray-800 hover:bg-gray-500 text-white py-2 rounded-md transition"
        >
          Add Task
        </button>
      </form>

      {tasks.map((item: data) => (
        <div
          key={item.id}
          className="w-full max-w-md bg-white border border-black rounded-md p-4 space-y-2"
        >
          {editTaskId === item.id ? (
            <>
              <input
                type="text"
                name="title"
                value={item.title}
                onChange={(e) =>
                  setTasks((prev) =>
                    prev.map((task) =>
                      task.id === item.id
                        ? { ...task, title: e.target.value }
                        : task
                    )
                  )
                }
                className="w-full px-4 py-2 border border-black rounded-md placeholder-gray-500"
              />
              <textarea
                name="description"
                value={item.description}
                onChange={(e) =>
                  setTasks((prev) =>
                    prev.map((task) =>
                      task.id === item.id
                        ? { ...task, description: e.target.value }
                        : task
                    )
                  )
                }
                className="w-full px-4 py-2 border border-black rounded-md placeholder-gray-500"
              ></textarea>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-800">{item.description}</p>
            </>
          )}

          <div className="flex space-x-4 pt-2">
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded-md"
              onClick={async () => {
                if (editTaskId === item.id) {
                  const { error } = await supabase
                    .from("todoList")
                    .update({
                      title: item.title,
                      description: item.description,
                    })
                    .eq("id", item.id);
                  if (error) console.error("Update error:", error.message);
                  else {
                    alert("Task updated successfully!");
                    setEditTaskId(null);
                    fetchData();
                  }
                } else {
                  setEditTaskId(item.id);
                }
              }}
            >
              {editTaskId === item.id ? "Save" : "Edit"}
            </button>
            <button
              className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded-md"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
