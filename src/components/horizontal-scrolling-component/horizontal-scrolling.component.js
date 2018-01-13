import React from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import "./horizontal-scrolling.component.css";

const HorizontalScrollingComponent = props => {
  const list = props.listItems.map((item, index /* eslint-disable */) => (
    <article
      className={
        props.selected === index
          ? "horizontal-list-item active"
          : "horizontal-list-item"
      }
      key={item.get("key")}
      onClick={() => {
        props.setSelected(index);
      }}
    >
      {item.get("key")}
    </article>
  ));
  /* eslint-enable */
  return <section className="horizontal-section">{list}</section>;
};

HorizontalScrollingComponent.propTypes = {
  listItems: PropTypes.instanceOf(List),
  // setSelected: PropTypes.func,
  selected: PropTypes.number,
};

HorizontalScrollingComponent.defaultProps = {
  listItems: List([]),
  selected: -1,
};

export default HorizontalScrollingComponent;
