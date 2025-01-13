export function Savebutton({ children }) {
  return (
    <>
      <button
        type="submit"
        className="mr-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        {children}
      </button>
    </>
  );
}
