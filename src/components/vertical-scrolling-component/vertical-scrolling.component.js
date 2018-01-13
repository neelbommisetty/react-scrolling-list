import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import "./vertical-scrolling.component.css";

class VerticalScrollingComponent extends Component {
  componentDidUpdate() {
    if (this.selectedItem) {
      this.selectedItem.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }

  render() {
    const list = this.props.listItems.map((item, index) => (
      <article
        key={item.get("key")}
        className={
          this.props.selected === index
            ? "vertical-list-item active"
            : "vertical-list-item"
        }
        ref={elem => {
          if (this.props.selected === index) {
            this.selectedItem = elem;
          }
        }}
      >
        {item.get("key")}
      </article>
    ));
    return <section className="vertical-section">{list}</section>;
  }
}

VerticalScrollingComponent.propTypes = {
  listItems: PropTypes.instanceOf(List),
  selected: PropTypes.number,
};

VerticalScrollingComponent.defaultProps = {
  listItems: List([]),
  selected: -1,
};

export default VerticalScrollingComponent;
