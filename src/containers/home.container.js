import { List } from "immutable";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/homeActions";
import HorizontalScrollingComponent from "../components/horizontal-scrolling-component/horizontal-scrolling.component";
import VerticalScrollingComponent from "../components/vertical-scrolling-component/vertical-scrolling.component";
import "./home.container.css";

class HomeComponent extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="main-content">
        <HorizontalScrollingComponent {...this.props} />
        <VerticalScrollingComponent {...this.props} />
      </div>
    );
  }
}
HomeComponent.propTypes = {
  listItems: PropTypes.instanceOf(List),
  fetchItems: PropTypes.func.isRequired,
};

HomeComponent.defaultProps = {
  listItems: List([]),
};

const mapStateToProps = state => ({
  listItems: state.data.get("listItems"),
  selected: state.data.get("selected"),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => {
    dispatch(Actions.fetchItems());
  },
  setSelected: index => {
    dispatch(Actions.setSelected(index));
  },
});

/* eslint-disable */
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  HomeComponent,
);
/* eslint-enable */

export default HomeContainer;
