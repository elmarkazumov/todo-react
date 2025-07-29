import {TaskProps, TaskList} from "../components/TaskList";

type MainProps = {
  tasks: TaskProps[];
  filter: string;
  setFilter: (filter: string) => void;
  toggleCompleted: (id: string) => void;
  onStartEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function Main({tasks, filter, setFilter, toggleCompleted, onStartEdit, onDelete}: MainProps) {

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
        </div>

        <TaskList
            tasks={tasks}
            toggleCompleted={toggleCompleted}
            onStartEdit={onStartEdit}
            onDelete={onDelete}
        />

    </main>

  );
}