import { useState, useEffect, useRef } from 'react'
import TaskList from './components/TaskList'
import InputForm from './components/InputForm'
import './App.css'

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const inputRef = useRef(null);

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
        inputRef.current.focus();
        const savedTasks = localStorage.getItem('tasks');
        if(savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function toggleCompleted(id) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, completed: !task.completed};
            }

            return task;
        }))
    }

    function onStartEdit(id) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, isEditing: true};
            }

            return task;
        }))
    }

    function onSaveEdit(id, newText) {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, text: newText, isEditing: false};
            }

            return task;
        }))
    }

    function onCancelEdit(id) {
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

    return (
    <div className="min-h-screen text-white flex justify-center items-center w-full">
        <div className="w-4xl h-220 bg-gray-900 rounded-xl shadow-xl flex items-center flex-col max-lg:max-w-2xl max-md:max-w-xl max-sm:max-w-96 max-sm:h-200">
        <InputForm
            inputRef={inputRef}
            onAdd={(task) =>
            setTasks([
                ...tasks,
                { id: crypto.randomUUID(), text: task, completed: false, isEditing: false },
            ])
            }
        />

        <h1 className="text-3xl font-bold text-center">Задачи:</h1>

        <div className="flex justify-between flex-wrap w-96 mt-5 max-sm:flex-col max-sm:w-70">
            {['All', 'Active', 'Completed'].map((type) => (
                <button key={type} className={`px-4 py-2 max-sm:mt-1 rounded-sm transition ${
                    filter === type ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                    onClick={() => setFilter(type)}>{type === 'All' ? 'Все ' + totalTasks : type === 'Active' ? 'Активные ' + remaining : 'Выполненные ' + completed}
                </button>
            ))}

            <button disabled={!hasCompleted}
            className={`px-4 py-2 max-sm:mt-1 rounded-sm transition sm:m-auto sm:mt-5 ${
            hasCompleted ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`} 
            onClick={deleteCompletedTasks}>Удалить выполненное</button>
        </div>

        <TaskList
            tasks={filteredTasks}
            toggleCompleted={toggleCompleted}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
        />
        </div>
    </div>
    );
}

export default App
