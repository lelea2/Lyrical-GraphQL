import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyric from '../queries/likeLyric';

class LyricList extends Component {

  constructor(props) {
    super(props);
  }

  handleLike(lyric) {
    const { id, likes } = lyric;
    this.props.mutate({
      variables: { id },
      optimisticReponse: {
        __typename: 'Mutation',
        likeLyric: { // look at mutation response on graphql and copy it here. 
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  renderList() {
    // console.log(this.props);
    return this.props.lyrics.map((lyric) => {
      const { id, content, likes } = lyric;
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons"
              onClick={this.handleLike.bind(this, lyric)}
            >
              thumb_up
            </i>
            <span>{likes}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderList()}
      </ul>
    );
  }
}

export default graphql(likeLyric)(LyricList);