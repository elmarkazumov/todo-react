import { useState } from "react";

type InputFormProps = {
    onSumbit: () => void,
    addTask: (text: string, description?: string) => void,
}

export default function InputForm({onSumbit, addTask}: InputFormProps) {
    const [newTask, setLocalTask] = useState({
        textTask: '',
        descTask: ''
    });
    const [error, setError] = useState(false);

    function handleClick() {
        if(newTask.textTask.trim() !== '') {
            addTask(newTask.textTask, newTask.descTask);
            setLocalTask({textTask: '',descTask: ''});
        } else {
            setError(true);
        }

        onSumbit();
    }

    return (
            <div className='w-4/5 flex justify-around flex-col min-h-20 h-140'>
                <div>
                    <label htmlFor="taskTitle">Название задачи:</label>
                    <input id="taskTitle" value={newTask.textTask} 
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if(e.key === 'Enter') {
                                handleClick();
                            }
                        }} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setLocalTask(prevState => ({
                            ...prevState, textTask: e.target.value})); (e.target.value.trim().length ? setError(false): setError(true));}} 
                        className={`bg-gray-100 h-11 mt-2 w-full outline-none box-border rounded-sm text-lg p-2 ${error ? 'border-red-500' : ''}`}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="taskDescription">Описание задачи:</label>
                    <textarea onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) => {setLocalTask(prevState => ({...prevState, descTask: event.target.value}))}}
                    id="taskDescription" className="bg-gray-100 mt-2 border-gray-800 rounded-sm outline-none w-full min-h-50 h-70 max-h-70"></textarea>                    
                </div>
                <button onClick={handleClick} className='px-4 py-2 text-white rounded-sm bg-orange-400 cursor-pointer'>Добавить</button>
            </div>
    )
}