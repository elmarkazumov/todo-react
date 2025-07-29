import { useState, useEffect } from "react";

type TaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (text: string, description?: string) => void;
    initialText?: string;
    initialDescription?: string;
    title?: string;
    submitButtonText?: string;
};

export default function TaskModal({isOpen, onClose, onSave, initialText = "", initialDescription = "", title = "Новая задача", submitButtonText = "Добавить"}: TaskModalProps) {
    const [textTask, setTextTask] = useState(initialText);
    const [descTask, setDescTask] = useState(initialDescription);

    useEffect(() => {
        setTextTask(initialText);
        setDescTask(initialDescription);
    }, [initialText, initialDescription, isOpen]);

    function handleSave() {
        if (textTask.trim() === "") {
            return;
        }
        onSave(textTask.trim(), descTask);
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl w-120 p-6 shadow-md relative">
                <button className="absolute right-5 top-5 text-2xl cursor-pointer" onClick={onClose} aria-label="Закрыть">&#x2715;</button>
                <h2 className="text-xl mb-4">{title}</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="taskTitle" className="block mb-1 font-medium">
                            Название задачи:
                        </label>
                        <input
                            id="taskTitle"
                            type="text"
                            value={textTask}
                            onChange={(e) => {
                                setTextTask(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSave();
                                }
                            }}
                            className="w-full p-2 border rounded border-gray-300"
                            autoFocus
                        />
                    </div>
                    <div>
                        <label htmlFor="taskDescription" className="block mb-1 font-medium">
                            Описание задачи:
                        </label>
                        <textarea
                            id="taskDescription"
                            value={descTask}
                            onChange={(e) => setDescTask(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded resize-none"
                            rows={4}
                        />
                    </div>
                    <div className="flex justify-end gap-3">
                        <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer">
                            Отмена
                        </button>
                        
                        <button onClick={handleSave} className="px-4 py-2 rounded bg-orange-400 text-white hover:bg-orange-500 cursor-pointer" disabled={textTask.trim() === ""}>
                            {submitButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}   