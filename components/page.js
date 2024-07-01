"use client";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themProvider } from "@/pages/Layout";
function Page({ title }) {
  const { themeMode, lung } = useContext(themProvider);
  const registerPlayer = useSelector((state) => state?.registerPlayer);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (registerPlayer?.id) {
      const notify = () => toast("Login Successfull!");
      notify();
    }
  }, [registerPlayer]);

  const logOutUser = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div
      className={`h-[85vh] flex flex-col justify-center align-middle items-center ${
        themeMode === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {registerPlayer?.id ? (
        <>
          <h1
            className={`text-3xl mb-3 ${
              themeMode === "dark" ? "text-white" : "text-black"
            }`}
          >
            User Name : @{registerPlayer?.username}
          </h1>
          <nav>
            {/* <Link href={linkTo}>Navigate: {NavigateTo}</Link> */}
            <button
              type="link"
              className="text-blue-400 underline"
              onClick={logOutUser}
            >
              Logout
            </button>
          </nav>
        </>
      ) : user?.id ? (
        <>
          <h1
            className={`text-3xl mb-3 ${
              themeMode === "dark" ? "text-white" : "text-black"
            }`}
          >
            {title} : {user?.username}
          </h1>
          <nav>
            <button type="link" onClick={logOutUser}>
              Logout
            </button>
          </nav>
        </>
      ) : (
        <div
          className={`text-3xl ${
            themeMode === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {lung["name"]}
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Page;
