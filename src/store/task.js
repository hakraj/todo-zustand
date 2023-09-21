import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const template = [
  {
    id: "001",
    task: "check out zustand",
  },
  {
    id: "002",
    task: "pratice with a to-do app",
  },
  {
    id: "003",
    task: "wait for a review",
  },
]

const taskStore = (set) => ({
  tasks: template,
  addTask: (task) => {
    set((state) => ({
      tasks: [task, ...state.tasks],
    }))
  },
  toggleDoneTask: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task)
    }))
  },
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id)
    }))
  },
})

const useTaskStore = create(
  devtools(
    persist(taskStore, {
      name: "tasks",
    })
  )
)

export default useTaskStore;