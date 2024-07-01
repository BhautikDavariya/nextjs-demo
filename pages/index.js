"use client";
import Page from "../components/page";
import Layout from "./Layout";

const Index = () => {
  return (
    <Layout>
      <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
    </Layout>
  );
};

export default Index;
