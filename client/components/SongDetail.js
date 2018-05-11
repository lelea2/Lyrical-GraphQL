import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSongDetail';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    console.log('>>> rerender', this.props);
    const { song } = this.props.data;
    return (song) ? (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} />
      </div>
    ) : (<div>Loading...</div>);
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    console.log(props);
    return {
      variables: { id: props.params.id },
      notifyOnNetworkStatusChange: true
    }
  }
})(SongDetail);