import { useState } from "react";
import trashPhoto from "../assets/trash.png";

export default function Task(props) {
    const [editedText, setEditedText] = useState(props.text);

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            props.onSaveEdit(editedText);
        } else if(e.key === 'Escape') {
            props.onCancelEdit();
        }
    }

    return (
            <div className="mt-5 w-4/5 min-h-10 flex items-start shrink-0 box-border p-3.5 bg-gray-800 border rounded-sm border-gray-600 gap-3">
                <input className="cursor-pointer mt-1.5" checked={props.completed} onChange={props.onToggle} type="checkbox"/>
                {
                    props.isEditing === false ? <p className={`w-full break-all ${props.completed ? 'line-through': false}`} onDoubleClick={props.onStartEdit}>{props.text}</p> :
                    <input
                        className="w-full outline-none box-border rounded-sm border border-gray-700"
                        type='text'
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    ></input>
                }
                <button className="cursor-pointer mt-0.5 ml-auto" onClick={props.onDelete}><img src={trashPhoto} alt="Удалить" width="22" height="22"/></button>
            </div>
    )
}