import React, { useState } from "react";
import Categories from "../Categories";
import Badge from "../Badge";

import closeSvg from "../../assets/img/close.svg";

import "./AddCategories.scss";

const AddCategories = ({ colors }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);

  console.log(selectedColor);

  return (
    <div className="add-categories">
      <Categories
        onClick={() => setVisibleForm(!visibleForm)}
        items={[
          {
            className: "categories__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить категорию"
          }
        ]}
      />
      {visibleForm && (
        <div className="add-categories__form">
          <img
          onClick={() => setVisibleForm(false)}
            src={closeSvg}
            alt="close"
            className="add-categories__form-close-btn"
          />
          <input
            className="field"
            type="text"
            placeholder="Название категории"
          />
          <div className="add-categories__form-colors">
            {colors.map(color => (
              <Badge
                onClick={() => selectColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button className="button">Добавить</button>
        </div>
      )}
    </div>
  );
};

export default AddCategories;
