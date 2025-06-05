import { create } from "zustand";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly"
    completedDate: string[];
    createdAt: string
}

interface HabitsState {
    habits: Habit[]
}

const useHabitstore = create<HabitsState>()((set, get) => {
    return {
        habits:[]
    }
})

export default useHabitstore;