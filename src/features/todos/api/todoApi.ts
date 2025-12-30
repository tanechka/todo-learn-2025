const API_URL = 'http://localhost:5001/todos';

const todoApi = {
  fetch: async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },
  create: async (text) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text}),
    });

    return await response.json();
  },
  toggle: async (id: string) => {
    const todos = await todoApi.fetch();
    const todo = todos.find(t => t.id === id);

    if (!todo) throw new Error('Todo not found');

    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todo.completed }),
    });

    if (!response.ok) throw new Error('Failed to update');
    return await response.json();
  },
  delete: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`,
  {
        method: 'DELETE'
      }
    );

    return response.ok;
  },
};

export default todoApi;