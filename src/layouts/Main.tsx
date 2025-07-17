import {TaskProps, TaskList} from "../components/TaskList";


type MainProps = {
  tasks: TaskProps[];
  filter: string;
  setFilter: (filter: string) => void;
  totalTasks: number;
  completed: number;
  remaining: number;
  hasCompleted: boolean;
  deleteCompletedTasks: () => void;
  toggleCompleted: (id: string) => void;
  onStartEdit: (id: string) => void;
  onSaveEdit: (id: string, newText: string) => void;
  onCancelEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function Main({
    tasks,
    filter,
    setFilter,
    totalTasks,
    completed,
    remaining,
    hasCompleted,
    deleteCompletedTasks,
    toggleCompleted,
    onStartEdit,
    onSaveEdit,
    onCancelEdit,
    onDelete,
}: MainProps) {

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
            tasks={tasks}
            toggleCompleted={toggleCompleted}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onCancelEdit={onCancelEdit}
            onDelete={onDelete}
        />

    </main>

  );
}