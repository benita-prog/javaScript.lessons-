async function loadTodo(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    const todo = await response.json();

    console.log(todo.title);
  } catch (err) {
    console.log("Failed:", err.message);
  }
}

loadTodo(30);
