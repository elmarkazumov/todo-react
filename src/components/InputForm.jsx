import { useState } from "react";

export default function InputForm(props) {
    const [localNewTask, setLocalTask] = useState('');
    const [error, setError] = useState(false);

    function handleClick() {
        if(localNewTask.trim() !== '') {
            props.onAdd(localNewTask);
            setLocalTask('');
        } else {
            setError(true);
        }
    }

    return (
            <div className='w-4/5 flex justify-between items-center mt-2.5 min-h-20'>
                <input value={localNewTask} 
                    onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                            handleClick();
                        }
                    }} 
                    onChange={(e) => {setLocalTask(e.target.value); (e.target.value.trim().length ? setError(false): setError(true));}} 
                    className={`w-140 max-lg:w-100 max-md:w-80 max-sm:w-50 h-10 outline-none box-border rounded-sm text-lg p-2 border-1 ${error ? 'border-red-500' : 'border-gray-800'}`}
                    type="text"
                    ref={props.inputRef}
                    placeholder='Введите задачу'
                />
                <button onClick={handleClick} className='px-4 py-2 rounded-sm bg-gray-800 cursor-pointer'>Добавить</button>
            </div>
    )
}