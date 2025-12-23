import { create } from 'zustand';

const useUIStore = create((set) => ({
    todoText: '',

    setTodoText: (text) => set({ todoText: text })
}));

export default useUIStore;