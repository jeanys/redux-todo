import React from 'react';
import { connect } from "react-redux";
import { setFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            dispatch(setFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;