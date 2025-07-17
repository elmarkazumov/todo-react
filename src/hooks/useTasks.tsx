import { useState } from "react";
import { useEffect } from "react";

interface TaskType {
  id: string,
  text: string,
  completed: boolean,
  isEditing: boolean,
}

export default function UseTasks() {
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

    const totalTasks = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const remaining = totalTasks - completed;

    const hasCompleted = tasks.some(task => task.completed);

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

    function onStartEdit(id: string) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, isEditing: true};
            }

            return task;
        }))
    }

    function onSaveEdit(id: string, newText: string) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, text: newText, isEditing: false};
            }

            return task;
        }))
    }

    function onCancelEdit(id: string) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, isEditing: false};
            }

            return task;
        }))
    }   

    function deleteCompletedTasks() {
        if(window.confirm("Удалить выполненные задачи?")) {
            setTasks(tasks.filter(task => !task.completed));
        }
    }

    return {
        tasks,
        setTasks,
        filter,
        setFilter,
        filteredTasks,
        totalTasks,
        completed,
        remaining,
        hasCompleted,
        toggleCompleted,
        deleteCompletedTasks,
        onCancelEdit,
        onSaveEdit,
        onStartEdit,    
    };
}