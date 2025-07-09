import { useState } from "react";
import trashPhoto from "../assets/trash.png";

type TaskProps = {
    text: string,
    completed: boolean,
    isEditing: boolean,
    onToggle: () => void,
    onStartEdit: () => void,
    onSaveEdit: (newText: string) => void,
    onCancelEdit: () => void,
    onDelete: () => void,
}

export default function Task({text, completed, isEditing, onToggle, onStartEdit, onSaveEdit, onCancelEdit, onDelete}: TaskProps) {
    const [editedText, setEditedText] = useState(text);

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
            onSaveEdit(editedText);
        } else if(e.key === 'Escape') {
            onCancelEdit();
        }
    }

    return (
            <div className="mt-5 w-4/5 min-h-10 flex items-start shrink-0 box-border p-3.5 bg-gray-800 border rounded-sm border-gray-600 gap-3">
                <input className="cursor-pointer mt-1.5" checked={completed} onChange={onToggle} type="checkbox"/>
                {
                    isEditing === false ? <p className={`w-full break-all ${completed ? 'line-through': ''}`} onDoubleClick={onStartEdit}>{text}</p> :
                    <input
                        className="w-full outline-none box-border rounded-sm border border-gray-700"
                        type='text'
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    ></input>
                }
                <button className="cursor-pointer mt-0.5 ml-auto" onClick={onDelete}><img src={trashPhoto} alt="Удалить" width="22" height="22"/></button>
            </div>
    )
}