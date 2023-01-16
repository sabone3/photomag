import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const Tabs = ({ options, onChange, selectedItem }) => {
  return (
    <nav className="navigation inner">
      {options.map((navitem) => (
        <button
          key={navitem.id}
          onClick={() => onChange(navitem.value)}
          className={classNames("navigation__link", {
            active: selectedItem === navitem.value,
          })}
        >
          {navitem.value}
        </button>
      ))}
    </nav>
  );
};

Tabs.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  selectedItem: PropTypes.string,
};

export default Tabs;
