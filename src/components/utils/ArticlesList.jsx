import React from "react";
import gundar from "../../assets/img/gunadarma.jpeg";
import Cards from "./Cards";

const BlogList = ({ limit }) => {
  const cardsData = [
    {
      href: "/about-gunadarma",
      image: gundar,
      alt: "Arif",
      judul: "About Universitas Gunadarma",
      content:
        "This article explains information about Gunadarma University, history, and several of the campus's advantages.",
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

export default BlogList;
