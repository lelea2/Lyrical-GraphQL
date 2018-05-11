import gql from 'graphql-tag';

// this has to match with fetchSongDetails
export default gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id,
      lyrics {
        id
        content,
        likes
      }
    }
  }
`;