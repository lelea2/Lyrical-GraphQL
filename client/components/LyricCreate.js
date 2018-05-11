import React, { Component } from 'react';
import { graphql } from 'react-apollo'; 
import mutation from '../queries/addLyric';

class LyricCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => { this.setState({ content: '' } )});
  }

  handleOnChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input
          onChange={this.handleOnChange.bind(this)}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default graphql(mutation)(LyricCreate);