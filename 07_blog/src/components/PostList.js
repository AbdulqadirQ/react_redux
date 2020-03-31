import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
    // PostList now calls the fetchPosts Action Creator just after rendering the component
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>PostList</div>;
    }
}

export default connect(null, { fetchPosts })(PostList);
