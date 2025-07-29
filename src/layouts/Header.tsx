import SearchInput from "../components/SearchInput";

type HeaderProps = {
    searchedTask: string,
    onChange: (value: string) => void,
    onAddTaskClick: () => void,
}

export default function Header({searchedTask, onChange, onAddTaskClick}: HeaderProps) {
    return (
        <header className="w-full min-h-20 flex justify-center items-center shadow">
            <div className="w-[1440px] flex justify-between items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" onClick={onAddTaskClick}>Add Task</button>

            <SearchInput searchedTask={searchedTask} onChange={onChange} />

            <div className="flex items-center gap-4">
                User Name
            </div>
            </div>
        </header>
    );
}