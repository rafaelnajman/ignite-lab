import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";
import { NavContext } from "../Context";
export function Event() {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {isNavOpen ? (
        <SideBar />
      ) : (
        <main className="flex flex-1  ">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
          <SideBar />
        </main>
      )}
    </div>
  );
}
