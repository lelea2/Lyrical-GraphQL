import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../queries/deleteSong';

class SongList extends Component {

  deleteSong(id) {
    this.props.mutate({
      variables: { id: id }
    }).then(() => this.props.data.refetch());
  }

  renderSongs() {
    const { data } = this.props;
    const { songs } = data;
    return songs.map((song) => {
      const { id, title } = song;
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>
          <i
            className="material-icons"
            onClick={this.deleteSong.bind(this, id)}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;
    const { loading } = data;
    return (loading) ? (<div>Loading...</div>) : (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="/songs/new"
          className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }

}

// bind component to graphql
export default graphql(mutation)(
  graphql(query, mutation)(SongList)
); // ew
