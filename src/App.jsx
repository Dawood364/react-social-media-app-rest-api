import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import PostListProvider from "./store/store-list";
import { Outlet } from "react-router-dom";

const App = ({}) => {
  return (
    <PostListProvider>
      <div className="containar">
        <SideBar />

        <div className="cotent">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
