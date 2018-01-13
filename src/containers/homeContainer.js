// import { List } from "immutable";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/homeActions";

class HomeComponent extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderList() {
    return this.props.listItems.map(item => (
      <li key={item.get("key")}>{item.get("key")}</li>
    ));
  }
  render() {
    return <ul>{this.renderList()}</ul>;
  }
}
HomeComponent.propTypes = {
  listItems: PropTypes.any,
  fetchItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listItems: state.data.get("listItems"),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => {
    dispatch(Actions.fetchItems());
  },
});

/* eslint-disable */
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(
  HomeComponent,
);
/* eslint-enable */

export default HomeContainer;
