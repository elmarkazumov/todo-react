import Header from './layouts/Header'
import Main from './layouts/Main'
import { useState } from "react";
import useTasks from "./hooks/useTasks";
import TaskModal from './components/TaskModal';
import { TaskProps } from './components/TaskList';

import './App.css'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const taskState = useTasks();
    const [isEditMode, setIsEditMode] = useState(false);
    const [taskBeingEdited, setTaskBeingEdited] = useState<TaskProps | null>(null);

    function handleStartEdit(id: string) {
        const task = taskState.tasks.find((t) => t.id === id);
        if (task) {
            setTaskBeingEdited(task);
            setIsEditMode(true);
            setIsModalOpen(true);
        }
    }

    function handleSaveEdit(id: string, newText: string, newDescription: string) {
        const updatedTasks = taskState.tasks.map((task) =>
            task.id === id ? { ...task, text: newText, description: newDescription } : task
        );
        taskState.setTasks(updatedTasks);
    }
    
        return (
        <div className="h-screen flex flex-col items-center">
            <Header searchedTask={taskState.searchTask} onChange={taskState.setSearchTask} onAddTaskClick={() => setIsModalOpen(true)} /> 

            <TaskModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setIsEditMode(false);
                    setTaskBeingEdited(null);
                }}
                initialText={isEditMode ? taskBeingEdited?.text || "" : ""}
                initialDescription={isEditMode ? taskBeingEdited?.description || "" : ""}
                onSave={(text, desc) => {
                    if (isEditMode && taskBeingEdited) {
                        handleSaveEdit(taskBeingEdited.id, text, desc || "");
                    } else {
                        taskState.addTask(text, desc);
                    }
                    setIsModalOpen(false);
                    setIsEditMode(false);
                    setTaskBeingEdited(null);
                }}
                title={isEditMode ? "Редактировать задачу" : "Новая задача"}
                submitButtonText={isEditMode ? "Сохранить" : "Добавить"}
            />
            
            <Main 
                tasks={taskState.filteredTasks}
                filter={taskState.filter}
                setFilter={taskState.setFilter}
                toggleCompleted={taskState.toggleCompleted}
                onStartEdit={handleStartEdit}
                onDelete={taskState.onDelete}
            />
        </div>
    );
}

export default App
