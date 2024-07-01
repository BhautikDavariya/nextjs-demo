"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { Button } from "antd";
import { useSelector } from "react-redux";
import ThemeToggle from "@/pages/ThemeToggle";

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
                  <Button
                    type="primary"
                    className="rounded-md"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    className="rounded-md"
                    onClick={() => router.push("/register")}
                  >
                    Ragister
                  </Button>
                </div>
              </div>
            ) : !user?.id ? (
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <Button
                    type="primary"
                    className="rounded-md"
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </Button>
                </div>
                <div>
                  <Button
                    type="primary"
                    className="rounded-md"
                    onClick={() => router.push("/register")}
                  >
                    Ragister
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1">
                <div className="col-span-1">
                  <Button
                    type="primary"
                    className="rounded-md bg-red-500"
                    onClick={() => logOutUser()}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            )}
            <div className="ms-3">
              <ThemeToggle setThemeMode={setThemeMode} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
