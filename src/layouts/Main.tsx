import UseTasks from "../hooks/useTasks";
import TaskList from "../components/TaskList";

export default function Main() {
    const {
        tasks,
        setTasks,
        filter,
        setFilter,
        filteredTasks,
        hasCompleted,
        toggleCompleted,
        deleteCompletedTasks,
        onCancelEdit,
        onSaveEdit,
        onStartEdit
    } = UseTasks();

  return (
        <main className="flex-1 flex flex-col items-center w-[1440px]">

        <div className="mt-10 flex justify-between w-100 border-b-2 border-b-gray-200">
            {['All', 'Active', 'Completed'].map((type: string) => (
                <button key={type} className={`cursor-pointer px-4 font-bold py-4 transition 
                    ${
                        filter === type ? 'text-amber-300' : 'hover:text-gray-300'}`}
                        onClick={() => setFilter(type)}>{type === 'All' ? 'Все' : type === 'Active' ? 'Активные' : 'Выполненные'
                    }
                </button>
            ))}

            {/* <button disabled={!hasCompleted}
            className={`px-4 py-2 max-sm:mt-1 rounded-sm transition sm:m-auto sm:mt-5 ${
            hasCompleted ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`} 
            onClick={deleteCompletedTasks}>Удалить выполненное</button> */}
        </div>

        <TaskList
            tasks={filteredTasks}
            toggleCompleted={toggleCompleted}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
        />

    </main>

  );
}