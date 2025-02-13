export function Updatebutton({ children,handleClick }) {
  return (
    <>
      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
}
