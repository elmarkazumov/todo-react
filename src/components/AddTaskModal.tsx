import InputForm from "./InputForm";

type AddTaskModalProps = {
  isOpen: boolean,
  onClose: () => void,
  addTask: (task: string) => void,
};

export default function AddTaskModal({isOpen, onClose, addTask}: AddTaskModalProps) {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
        <div className="bg-white h-150 rounded w-100 shadow-md">
            <h2 className="text-xl mb-4">Добавить задачу</h2>
            <InputForm onSumbit={onClose} addTask={addTask}/>
            <button className="mt-4 w-30 bg-gray-600 hover:text-gray-900" onClick={onClose}>Отмена</button>
        </div>
        </div>
    )
}