"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startClock } from "../actions";
import Page from "../components/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const dispatch = useDispatch();
  const [themeMode, setThemeMode] = useState("");
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);
  return (
    <>
      <Header setThemeMode={setThemeMode} />
      <Page
        title="Index Page"
        linkTo="/other"
        NavigateTo="Other Page"
        themeMode={themeMode}
      />
      <Footer />
    </>
  );
};

export default Index;
