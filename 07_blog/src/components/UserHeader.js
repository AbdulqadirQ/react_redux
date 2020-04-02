import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps is maptStateToProps' props that will become into UserHeader's props
    // We can therefore reference ownProps to get any prop values we need in this function
    // i.e.  ownProps === this.props  (and I mean it's a REFERENCE, so same mem location)
    // find returns user for user with userId of ownProps.userId
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
