import React, {Component} from 'react';

class Author extends Component {
  render () {
    return (
      <div>
        <p>{this.props.authorArr}</p>
      </div>
    );
  }
}

export default Author;