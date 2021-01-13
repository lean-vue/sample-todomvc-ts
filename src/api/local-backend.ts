import { Todo } from '@/models/todo';
import { Backend } from './backend.interface';

// Helper functions
function loadTodos(): Todo[] {
  return JSON.parse(localStorage.todos || '[]');
}
function saveTodos(todos: Todo[]): void {
  localStorage.todos = JSON.stringify(todos);
}
function generateId(): number {
  const nextId = JSON.parse(localStorage.lastId || '0') + 1;
  localStorage.lastId = nextId;
  return nextId;
}

// Backend implementation
const localBackend: Backend = {
  async getAll() {
    return loadTodos();
  },
  async createTodo(title) {
    const todos = loadTodos();

    const todo = { id: generateId(), title, completed: false };
    todos.push(todo);
    saveTodos(todos);

    return todo;
  },
  async updateTodo(id, changes) {
    const todos = loadTodos();

    const todo = todos.find((t) => t.id === id) as Todo;
    Object.assign(todo, changes);
    saveTodos(todos);

    return todo;
  },
  async deleteTodo(id) {
    const todos = loadTodos();

    saveTodos(todos.filter((t) => t.id !== id));

    return id;
  },
};

export default localBackend;
