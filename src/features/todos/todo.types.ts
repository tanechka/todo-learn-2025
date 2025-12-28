import { METHOD, FILTERS } from './todoConst';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type FilterType = keyof typeof FILTERS;
export type IdMethodType = keyof typeof METHOD;

export type TodoState = {
  items: Todo[];
  filter: FilterType;
};

export type Stats = {
  total: number;
  completed: number;
  active: number;
}
