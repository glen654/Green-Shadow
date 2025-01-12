import { CirclePlus } from "lucide-react";

export function Addbutton({ children, onClick }) {
  return (
    <>
      <button
        className="flex items-center bg-green-500 text-white px-6 py-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={onClick}
      >
        <CirclePlus className="mr-2" />
        Add {children}
      </button>
    </>
  );
}
