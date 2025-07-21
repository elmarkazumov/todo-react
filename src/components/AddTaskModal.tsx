import InputForm from "./InputForm";

type AddTaskModalProps = {
  isOpen: boolean,
  onClose: () => void,
  addTask: (task: string, description?: string) => void,
};

export default function AddTaskModal({isOpen, onClose, addTask}: AddTaskModalProps) {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
        <div className="bg-white h-170 rounded-3xl w-120 shadow-md flex flex-col justify-center items-center relative">
            <button className="absolute right-5 top-5 text-2xl cursor-pointer" onClick={onClose}>&#x2715;</button>
            <h2 className="text-xl">Новая задача</h2>
            <InputForm onSumbit={onClose} addTask={addTask}/>
        </div>
        </div>
    )
}