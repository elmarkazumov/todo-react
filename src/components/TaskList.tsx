import Task from './Task'

type TaskProps = {
    id: string,
    text: string,
    completed: boolean,
    isEditing: boolean,
}

type TaskListProps = {
    tasks: TaskProps[],
    onDelete: (id: string) => void,
    toggleCompleted: (id: string) => void,
    onStartEdit: (id: string) => void,
    onSaveEdit: (id: string, newText: string) => void,
    onCancelEdit: (id: string) => void,
}

export default function TaskList({tasks, onDelete, toggleCompleted, onStartEdit, onSaveEdit, onCancelEdit}: TaskListProps) {
    return (
            <div className='min-h-13 overflow-auto w-12/12 flex flex-col items-center'>
                {
                    tasks.map((task: TaskProps) => 
                        <Task key={task.id} 
                            text={task.text} 
                            completed={task.completed} 
                            isEditing={task.isEditing}
                            onStartEdit={() => onStartEdit(task.id)}
                            onSaveEdit={(newText) => onSaveEdit(task.id, newText)}
                            onCancelEdit={() => onCancelEdit(task.id)}
                            onToggle={() => toggleCompleted(task.id)} 
                            onDelete={() => onDelete(task.id)} 
                        />
                    )
                }
            </div>
    )
}