import React, { useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Morning Routine & Self-Care 🌅",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    {
      desc: "Creative & Side Projects 🎨🚀",
      filesize: "0.98mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    {
      desc: "Daily Work & Study Goals 📚💻",
      filesize: "1.8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Recommended",
        tagColor: "pink",
      },
    },
    {
      desc: "Meetings & Appointments 📅",
      filesize: "0.33mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "blue",
      },
    },
    {
      desc: "Evening Wrap-Up & Planning for Tomorrow 🌙📖",
      filesize: "1.98mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Do Quickly",
        tagColor: "orange",
      },
    },
    {
      desc: "Morning Routine & Self-Care 🌅",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    {
      desc: "Creative & Side Projects 🎨🚀",
      filesize: "0.98mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "orange",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full h-full top-0 left-0 absolute z-[3] flex gap-5 flex-wrap p-10"
    >
      {data.map((item, index) => (
        <Cards data={item} refer={ref} />
      ))}
    </div>
  );
}

export default Foreground;
