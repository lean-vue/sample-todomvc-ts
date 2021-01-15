import { Todo } from '@/models/todo';

export interface State {
  todos: Todo[];
  visibility: 'all' | 'active' | 'completed';
}
