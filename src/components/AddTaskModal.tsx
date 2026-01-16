import InputForm from "./InputForm";

type AddTaskModalProps = {
  isOpen: boolean,
  onClose: () => void,
  addTask: (task: string) => void,
};

export default function AddTaskModal({isOpen, onClose, addTask}: AddTaskModalProps) {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded w-96 shadow-md">
            <h2 className="text-xl mb-4">Добавить задачу</h2>
            <InputForm onSumbit={onClose} addTask={addTask}/>
            <button className="mt-4 text-sm text-gray-600 hover:text-gray-900" onClick={onClose}>Отмена</button>
        </div>
        </div>
    )
}