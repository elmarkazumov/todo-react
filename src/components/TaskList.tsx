import Task from './Task'

export type TaskProps = {
    id: string,
    text: string,
    description?: string,
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

export function TaskList({tasks, onDelete, toggleCompleted, onStartEdit, onSaveEdit, onCancelEdit}: TaskListProps) {
    return (
            <div className='mt-5 w-[1300px] grid grid-cols-3 gap-10'>
                {
                    tasks.map((task: TaskProps) => 
                        <Task key={task.id} 
                            text={task.text}
                            description={task?.description}
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