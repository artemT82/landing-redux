import React, { PropTypes } from 'react';

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div id="main-view">
        {this.props.children}
      </div>
    );
  }
}
