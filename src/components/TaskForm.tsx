import { useState, useEffect } from "react";

type TaskFormProps = {
    initialText?: string;
    initialDescription?: string;
    onSubmit: (text: string, description?: string) => void;
    onCancel: () => void;
    submitButtonText?: string;
};

export default function TaskForm({initialText = "", initialDescription = "", onSubmit, onCancel, submitButtonText = "Добавить"}: TaskFormProps) {
    const [textTask, setTextTask] = useState(initialText);
    const [descTask, setDescTask] = useState(initialDescription);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTextTask(initialText);
        setDescTask(initialDescription);
        setError(false);
    }, [initialText, initialDescription]);

    function handleClick() {
        if (textTask.trim() !== "") {
            onSubmit(textTask.trim(), descTask);
            setTextTask("");
            setDescTask("");
        } else {
            setError(true);
        }
    }

    return (
        <div className='w-4/5 flex justify-around flex-col min-h-20 h-140'>
            <div>
                <label htmlFor="taskTitle">Название задачи:</label>
                <input
                    id="taskTitle"
                    value={textTask}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                        handleClick();
                    }
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTextTask(e.target.value);
                        setError(e.target.value.trim().length === 0);
                    }}
                    className={`bg-gray-100 h-11 mt-2 w-full outline-none box-border rounded-sm text-lg p-2 ${
                    error ? "border-red-500" : ""}`}
                    type="text"
                    autoFocus
                />
            </div>
            <div>
                <label htmlFor="taskDescription">Описание задачи:</label>
                <textarea
                    id="taskDescription"
                    value={descTask}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescTask(e.target.value)}
                    className="bg-gray-100 mt-2 border-gray-800 rounded-sm outline-none w-full min-h-50 h-70 max-h-70"
                />
            </div>
            <div className="flex justify-end gap-3">
                <button onClick={onCancel} className="px-4 py-2 rounded-sm bg-gray-300 text-gray-700 cursor-pointer">
                    Отмена
                </button>
                <button onClick={handleClick} className="px-4 py-2 text-white rounded-sm bg-orange-400 cursor-pointer" disabled={textTask.trim() === ""}>
                    {submitButtonText}
                </button>
            </div>
        </div>
    );
}