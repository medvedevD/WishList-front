import React, { useState } from "react";
import Categories from "../Categories";
import Badge from "../Badge";

import closeSvg from "../../assets/img/close.svg";

import "./AddCategories.scss";

const AddCategories = ({ colors, onAdd }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [selectedColor, selectColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState("");
  

  const addCategory = () => {
    if (!inputValue) {
      alert("Введите название категории");
      return;
    }
    const color = colors.filter(c => c.id === selectedColor)[0].name;
    onAdd({ id: Math.random, name: inputValue, color });
  };

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
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
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
          <button onClick={addCategory} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCategories;
