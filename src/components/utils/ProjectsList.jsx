import React from "react";
import adoptpets from "../../assets/img/adoptpets.jpg";
import sakana from "../../assets/img/sakana.jpg";
import figma from "../../assets/img/figma.jpg";
import logo from "../../assets/img/mylogo.jpg";
import Cards from "./Cards";

const ProjectsList = ({ limit }) => {
  const cardsData = [
    {
      href: "https://github.com/arifnrhdi/sakana-todo-list",
      target: "_blank",
      image: sakana,
      alt: "Surgeon Fish",
      judul: "Sakana To-Do List",
      content:
        "A simple Website for task management using React and Express JS.",
    },
    {
      href: "https://github.com/arifnrhdi/adoptpets",
      image: adoptpets,
      target: "_blank",
      alt: "Adopt Pets",
      judul: "AdoptPets",
      content:
        "A dynamic CRUD based animal adoption website using Express JS and React Vite",
    },
    {
      href: "https://www.figma.com/design/VF8nZ6Vmf84I3LLZRR2DC9/Letterboxd?t=NAlSW2IXO8O9G3Je-1",
      image: figma,
      target: "_blank",
      alt: "Letterboxd Figma",
      judul: "Prototype Letterboxd",
      content:
        "A prototype project for an alternative look and features of the Letterboxd application for HCI practicums using Figma",
    },
  ];

  const limitedCards = limit ? cardsData.slice(0, limit) : cardsData;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {limitedCards.map((card, index) => (
        <Cards
          key={index}
          href={card.href}
          target={card.target}
          image={card.image}
          alt={card.alt}
          judul={card.judul}
        >
          {card.content}
        </Cards>
      ))}
    </div>
  );
};

export default ProjectsList;
