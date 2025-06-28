import { useState } from "react";

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
            <div className={`shrink-0 mt-5 w-4/5 min-h-10 bg-gray-800 items-center box-border p-3.5 flex justify-between border-1 rounded-sm
                 border-gray-600 border-solid`}>
                {
                    props.isEditing === false ? <p className={`max-w-4/5 break-all ${props.completed ? 'line-through': false}`} onDoubleClick={props.onStartEdit}>{props.text}</p> :
                    <input
                        className="w-4/5 outline-none box-border rounded-sm border-1 border-gray-700"
                        type='text'
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        onKeyDown={handleKeyDown}    
                    ></input>
                }
                <div className='flex justify-between w-26'>
                    <input className="cursor-pointer" checked={props.completed} onChange={props.onToggle} type="checkbox"/>
                    <button className="cursor-pointer" onClick={props.onDelete}>Удалить</button>
                </div>
            </div>
    )
}