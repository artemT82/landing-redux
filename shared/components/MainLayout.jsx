import React, { PropTypes } from 'react';

export default class MainLayout extends React.Component {
    static propTypes = {
      children: PropTypes.object
    };

    render() {
        return (
            <div id="MainLayout">
                {this.props.children}
            </div>
        );
    }
}
