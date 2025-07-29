import editBtn from "../assets/edit.png";

type TaskProps = {
    text: string,
    description?: string,
    completed: boolean,
    onToggle: () => void,
    onStartEdit: () => void,
    onDelete: () => void,
}

export default function Task({text, description, completed, onToggle, onStartEdit, onDelete}: TaskProps) {

    return (
        <div className="min-w-[400px] min-h-[150px] flex flex-col justify-center box-border p-3.5 rounded-2xl bg-gray-100">
            <div className="h-20 flex justify-between items-center">
                <div className="w-11/12 h-full cursor-pointer" onDoubleClick={onStartEdit}>
                    <p className={`w-full text-2xl ${!description ? `break-all`: `overflow-hidden overflow-ellipsis`}`}>{text}</p>
                    <p className="overflow-hidden overflow-ellipsis text-gray-700">{description}</p>
                </div>
                <button onClick={onStartEdit} className="cursor-pointer"><img src={editBtn} alt="Удалить" width="25" height="25"/></button>
            </div>
            <div className="flex justify-between mt-2 items-center">
                <button className="cursor-pointer" onClick={onDelete}>Удалить</button>
                <label className={`w-[210px] cursor-pointer flex items-center justify-between ${completed ? 'text-blue-600': ''}`}>Пометить выполненным<input className="cursor-pointer w-5 h-5" checked={completed} onChange={onToggle} type="checkbox"/></label>
            </div>
        </div>
    )
}