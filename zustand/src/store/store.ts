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
    addHabit: (name: string, frequency: "daily" | "weekly") => void
}

const useHabitstore = create<HabitsState>()((set, get) => {
    return {
        habits: [],
        addHabit: (name, frequency) => set((state) => {
            return {
                habits: [...state.habits, {
                    id: Date.now().toString(),
                    name,
                    frequency,
                    completedDate: [],
                    createdAt: new Date().toISOString(),
                }]
            }
        }

        ),
    }
})

export default useHabitstore;