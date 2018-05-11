# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com

```
// MongoDB
brew services start mongodb

mongo

brew services stop mongodb

```

```
mutation {
  addSong(title: "Fight song") {
    id,
    title
  }
}

```

#### GraphQL + React Strategy
1. Identify data required
2. Write query in Graphiql (for practive) and in component file
3. Bound query + component
4. Access data!


// FE mutation, used qith query variables
```
mutation AddSong($title: String) {
  addSong(title: $title) {
    id,
    title
  }
}

```

* Cold Cache (good flow)

Create Song -> Go to SongList -> run query -> song fetched

* Warm cache

Fetch Song -> songs 2,3,4 fetched -> create song 5 -> go to songlist -> already fetch query, no need to fetch again -> render song 2,3,4 

