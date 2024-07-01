"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
// import { button } from "antd";
import { useSelector } from "react-redux";
import ThemeToggle from "@/pages/ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = (props) => {
  const { setThemeMode } = props;
  const router = useRouter();
  const registerPlayer = useSelector((state) => state?.registerPlayer);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  const logOutUser = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <>
      <div className="navbar !border-b py-3 pe-3">
        <div className="header flex justify-between ">
          <div className=" w-[70%]">
            <Sidebar />
          </div>
          <div className="flex justify-end w-[30%]">
            {registerPlayer && !registerPlayer?.id ? (
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <button
                    type="primary"
                    className="rounded-md py-2 px-2 bg-green-300 text-black"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button
                    type="primary"
                    className="rounded-md py-2 px-2 bg-blue-300 text-black"
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            ) : !user?.id ? (
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <button
                    type="primary"
                    className="rounded-md py-2 px-2 bg-green-300 text-black"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <button
                    type="primary"
                    className="rounded-md py-2 px-2 bg-blue-300 text-black"
                    onClick={() => router.push("/register")}
                  >
                    Register
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1">
                <div className="col-span-1">
                  <button
                    type="primary"
                    className="rounded-md py-2 px-2 text-black bg-red-500"
                    onClick={() => logOutUser()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
            <div className="ms-3">
              <ThemeToggle setThemeMode={setThemeMode} />
            </div>
            <div className="ms-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
