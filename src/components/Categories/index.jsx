import React from "react";

import './Categories.scss'

const Categories = ({ items }) => {
  return (
    <ul className="categories">
      {items.map(item => (
        <li class={item.active ? 'active' : ''}>
          <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
