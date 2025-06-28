import Task from './Task.jsx'

export default function TaskList({tasks, onDelete, toggleCompleted, onStartEdit, onSaveEdit, onCancelEdit}) {
    return (
            <div className='min-h-13 overflow-auto w-12/12 flex flex-col items-center'>
                {
                    tasks.map((task) => 
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