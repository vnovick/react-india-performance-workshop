import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {useDebounce} from '@uidotdev/usehooks';

export type TPost = {
  id: string;
  title: string;
  body: string;
  likes: number;
};

type TPostProps = {
  post: TPost;
  onLike: () => void;
};

const Post = ({post, onLike}: TPostProps) => (
  <View style={styles.postContainer}>
    <Text style={styles.postTitle}>{post.title}</Text>
    <Text>{post.body}</Text>
    <Button title={`Like (${post.likes})`} onPress={onLike} />
  </View>
);

export const UserPosts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<TPost[]>([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json.map((post: TPost) => ({...post, likes: 0}))));

    //Polling for new posts every 5 seconds
    // const interval = setInterval(() => {
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => setPosts(json.map(post => ({...post, likes: 0}))));

    //   // Continuously fetching posts every 5 seconds without clearing interval
    // }, 5000);

    // Intentionally missing cleanup function for the setInterval
    // Uncommenting the line below would fix the leak
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFilteredData(
      posts.filter(item =>
        item.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
      ),
    );
    console.warn(posts, debouncedQuery);
    // This will cause the FlatList to re-render with every change in the query, even if data hasn't changed
  }, [debouncedQuery, posts]);

  const handleLike = (postId: string) => {
    setPosts(
      posts.map(post =>
        post.id === postId ? {...post, likes: post.likes + 1} : post,
      ),
    );
    // This will cause the entire list to re-render every time a post is liked.
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Filter posts..."
        value={query}
        onChangeText={setQuery} // This causes the query state to update and triggers the filter effect
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Post post={item} onLike={() => handleLike(item.id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  postContainer: {marginBottom: 20},
  postTitle: {fontSize: 18, fontWeight: 'bold'},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});
