export function AuthButton({ children }) {
  return (
    <>
      <div className="mt-8">
        <button
          type="submit"
          className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none transition-all"
        >
          {children}
        </button>
      </div>
    </>
  );
}
