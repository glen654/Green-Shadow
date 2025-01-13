import { AuthButton } from "../components/AuthButton";

export function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logged in!");
  };
  return (
    <>
      <form
        className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl"
        onSubmit={handleLogin}
      >
        <div className="mb-12">
          <h3 className="text-gray-800 text-3xl text-center">Login</h3>
        </div>

        <div>
          <label className="text-gray-800 text-xs block mb-2">Email</label>
          <div className="relative flex items-center">
            <input
              name="email"
              type="email"
              required
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="text-gray-800 text-xs block mb-2">Password</label>
          <div className="relative flex items-center">
            <input
              name="password"
              type="password"
              required
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="mt-8">
          <AuthButton>Login</AuthButton>
          <p className="text-gray-800 text-sm mt-4 text-center">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-blue-500 font-semibold hover:underline ml-1"
            >
              Register here
            </button>
          </p>
        </div>
      </form>
    </>
  );
}
