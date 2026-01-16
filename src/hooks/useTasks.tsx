import { useState } from "react";
import { useEffect } from "react";

interface TaskType {
  id: string,
  text: string,
  description?: string,
  completed: boolean,
  isEditing: boolean,
}

export default function useTasks() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [filter, setFilter] = useState('All');

    const filteredTasks = tasks.filter((task) => {
        if(filter === 'Active') {
            return !task.completed;
        }
        if(filter === 'Completed') {
            return task.completed;
        }
        return true;
    });

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if(savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function toggleCompleted(id: string) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, completed: !task.completed};
            }

            return task;
        }))
    }

    function addTask(task: string, description?: string) {
        setTasks([
            ...tasks,
            { id: crypto.randomUUID(), text: task, description: description, completed: false, isEditing: false },
])
    }
 

    function onDelete(id: string) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return {
        tasks,
        setTasks,
        filter,
        setFilter,
        addTask,
        filteredTasks,
        toggleCompleted,
        onDelete,
    };
}