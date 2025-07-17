export default function Header() {
    return (
        <header className="w-full h-20 flex justify-center items-center shadow">
            <div className="w-[1440px] flex justify-between items-center">
                <nav className="text-sm font-medium">
                    <a href="">Add Task</a>
                </nav>

                <input type="text" placeholder="Search for your tasks" className="bg-gray-100 rounded-full w-120 outline-none box-border p-3 pl-4"/>

                <div className="flex items-center gap-4">
                    User Name
                </div>
            </div>
        </header>
    );
}