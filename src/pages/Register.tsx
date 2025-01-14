import { AuthButton } from "../components/AuthButton";
import { Togglepage } from "../components/Togglepage";
import { useNavigate } from "react-router";
import { HeaderImage } from "../components/HeaderImage";

export function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleToggle = () => {
    navigate("/");
  };
  return (
    <div>
      <HeaderImage />
      <form
        className="bg-slate-100 max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl"
        onSubmit={handleRegister}
      >
        <div className="mb-12">
          <h3 className="text-gray-800 text-3xl text-center font-bold">
            Green Shadow Register
          </h3>
        </div>

        <div>
          <label className="text-gray-800 text-xs block mb-2">Email</label>
          <div className="relative flex items-center">
            <input
              name="email"
              type="email"
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
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="mt-8">
          <label className="text-gray-800 text-xs block mb-2">Role</label>
          <select
            name="role"
            className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 py-3 outline-none"
          >
            <option value="Administrative">Administrative</option>
            <option value="Manager">Manager</option>
            <option value="Scientist">Scientist</option>
          </select>
        </div>

        <div className="mt-8">
          <AuthButton>Register</AuthButton>
          <Togglepage onClick={handleToggle}>Login Here</Togglepage>
        </div>
      </form>
    </div>
  );
}
