type SearchInputProps = {
    searchedTask: string, 
    onChange: (value: string) => void
}


export default function SearchInput({searchedTask, onChange}: SearchInputProps) {

    return (
        <input
            value={searchedTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onChange(e.target.value);
            }}
            type="text"
            placeholder="Search for your tasks"
            className="bg-gray-100 rounded-full w-120 outline-none box-border p-3 pl-4"
        />
    );
}