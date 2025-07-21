import { useState } from "react";
import editBtn from "../assets/edit.png";

type TaskProps = {
    text: string,
    description?: string,
    completed: boolean,
    isEditing: boolean,
    onToggle: () => void,
    onStartEdit: () => void,
    onSaveEdit: (newText: string) => void,
    onCancelEdit: () => void,
    onDelete: () => void,
}

export default function Task({text, description, completed, isEditing, onToggle, onStartEdit, onSaveEdit, onCancelEdit, onDelete}: TaskProps) {
    const [editedText, setEditedText] = useState(text);

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
            onSaveEdit(editedText);
        } else if(e.key === 'Escape') {
            onCancelEdit();
        }
    }

    return (
            <div className="min-w-[400px] min-h-[150px] flex flex-col justify-center box-border p-3.5 rounded-2xl bg-gray-100">
                <div className="h-20 flex justify-between items-center">
                    <div className="w-11/12 h-full cursor-pointer" onDoubleClick={onStartEdit}>
                        <p className={`w-full ${!description ? `break-all`: `overflow-hidden overflow-ellipsis`}`}>{text}</p>
                        <p className="overflow-hidden overflow-ellipsis">{description}</p>
                    </div>
                    <button className="cursor-pointer"><img src={editBtn} alt="Удалить" width="25" height="25"/></button>
                    {/* {
                    isEditing === false ? <p className={`w-full break-all ${completed ? 'line-through': ''}`} onDoubleClick={onStartEdit}>{text}</p> :
                    <input
                        className="w-full outline-none box-border rounded-sm border border-gray-700"
                        type='text'
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyDown={handleKeyDown}>
                    </input>
                    } */}
                </div>
                <div className="flex justify-between mt-2 items-center">
                    <button className="cursor-pointer" onClick={onDelete}>Удалить</button>
                    <label className={`w-[210px] cursor-pointer flex items-center justify-between ${completed ? 'text-blue-600': ''}`}>Пометить выполненным<input className="cursor-pointer w-5 h-5" checked={completed} onChange={onToggle} type="checkbox"/></label>
                </div>
            </div>
    )
}