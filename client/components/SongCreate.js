import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../queries/addSong';

class SongCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // Hook up with mutation
    console.log('>>>> update song', this.state.title);
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query }] // attempt to refetch to solve cache, Apollo identify query has been run and will not be re-execute on hashHistory.push
    }).then(() => hashHistory.push('/'))
      .catch(() => console.log('Error'));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.tile}
          />
        </form>
      </div>
    );
  }
}

export default graphql(mutation)(SongCreate);
