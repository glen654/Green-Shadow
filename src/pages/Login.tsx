import { useNavigate } from "react-router";
import { AuthButton } from "../components/AuthButton";
import { HeaderImage } from "../components/HeaderImage";
import { Togglepage } from "../components/Togglepage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/Store";
import { useEffect, useState } from "react";
import { loginUser } from "../reducers/UserReducer";
import { User } from "../models/User";
import Swal from "sweetalert2";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [loginFailed, setLoginFailed] = useState(false);

  const initialUserSate = {
    userName: "",
    userEmail: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserSate);

  const handleUserLogin = () => {
    if (!user.userEmail || !user.password) {
      alert("All fields are required");
      return;
    }
    const newUser = new User(user.userName, user.userEmail, user.password);
    dispatch(loginUser(newUser)).then(() => {
      resetForm();
      Swal.fire({
        icon: "success",
        title: "You have successfully Logged In!",
        text: `Welcome to Green Shadow ${user.userName}`,
        confirmButtonText: "Ok",
      });
      navigate("/dashboard");
    });
    navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginFailed(false);
    handleUserLogin();
  };

  const resetForm = () => {
    setUser(initialUserSate);
  };

  const handleToggle = () => {
    navigate("/register");
  };
  return (
    <div>
      <HeaderImage />
      <form
        className="bg-slate-100 max-w-xl  w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 sm:p-8 rounded-2xl"
        onSubmit={handleLogin}
      >
        <div className="mb-12">
          <h3 className="text-gray-800 text-3xl text-center font-bold">
            Green Shadow Login
          </h3>
        </div>
        <div>
          <label className="text-gray-800 text-xs block mb-2">UserName</label>
          <div className="relative flex items-center">
            <input
              name="username"
              type="text"
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter username"
            />
          </div>
        </div>

        <div>
          <label className="text-gray-800 text-xs block mb-2 mt-4">Email</label>
          <div className="relative flex items-center">
            <input
              name="email"
              type="email"
              value={user.userEmail}
              onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none"
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full bg-transparent text-sm text-gray-800 border-b border-gray-300 focus:border-green-500 pl-2 pr-8 py-3 outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="mt-8">
          <AuthButton handleClick={handleUserLogin}>Login</AuthButton>
          <Togglepage onClick={handleToggle}>Register Here</Togglepage>
        </div>
      </form>
    </div>
  );
}
