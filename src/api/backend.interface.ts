import { Todo } from '@/models/todo';

export interface Backend {
  getAll(): Promise<Todo[]>;
  createTodo(title: string): Promise<Todo>;
  updateTodo(id: number, changes: Partial<Omit<Todo, 'id'>>): Promise<Todo>;
  deleteTodo(id: number): Promise<number>;
}
