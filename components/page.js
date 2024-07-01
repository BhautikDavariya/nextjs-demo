"use client";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { loadData } from "@/actions";
import { Button } from "antd";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function Page({ title, themeMode }) {
  const registerPlayer = useSelector((state) => state?.registerPlayer);
  const theme = Cookies.get("theme");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
    dispatch(loadData());
  }, []);

  console.log("theme", theme);

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
            <Button type="link" onClick={logOutUser}>
              Logout
            </Button>
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
            <Button type="link" onClick={logOutUser}>
              Logout
            </Button>
          </nav>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Page;
