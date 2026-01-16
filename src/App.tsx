import Header from './layouts/Header'
import Main from './layouts/Main'
import { useState } from "react";
import useTasks from "./hooks/useTasks";
import AddTaskModal from './components/AddTaskModal';

import './App.css'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
      const taskState = useTasks();
    
        return (
        <div className="h-screen flex flex-col items-center">
            <Header onAddTaskClick={() => setIsModalOpen(true)} />
            <AddTaskModal addTask={taskState.addTask} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Main 
                tasks={taskState.filteredTasks}
                filter={taskState.filter}
                setFilter={taskState.setFilter}
                totalTasks={taskState.totalTasks}
                completed={taskState.completed}
                remaining={taskState.remaining}
                hasCompleted={taskState.hasCompleted}
                deleteCompletedTasks={taskState.deleteCompletedTasks}
                toggleCompleted={taskState.toggleCompleted}
                onStartEdit={taskState.onStartEdit}
                onSaveEdit={taskState.onSaveEdit}
                onCancelEdit={taskState.onCancelEdit}
                onDelete={taskState.onDelete}
                />
        </div>

    // <div className="min-h-screen text-white flex justify-center items-center w-full">
    //     <div className="w-4xl h-220 bg-gray-900 rounded-xl shadow-xl flex items-center flex-col max-lg:max-w-2xl max-md:max-w-xl max-sm:max-w-96 max-sm:h-200">
    //     <InputForm
    //         onAdd={(task: string) =>
    //         setTasks([
    //             ...tasks,
    //             { id: crypto.randomUUID(), text: task, completed: false, isEditing: false },
    //         ])
    //         }
    //     />

    //     <TaskList
    //         tasks={filteredTasks}
    //         toggleCompleted={toggleCompleted}
    //         onStartEdit={onStartEdit}
    //         onSaveEdit={onSaveEdit}
    //         onCancelEdit={onCancelEdit}
    //         onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
    //     />
    //     </div>
    // </div>
    );
}

export default App
