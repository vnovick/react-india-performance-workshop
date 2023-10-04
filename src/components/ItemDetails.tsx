import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {processPostData} from '../utils/processing';
import {performExpensiveComputation} from '../utils/compute';

type ItemDetailsProps = {
  postId: string;
};

type TPost = {
  id: string;
  title: string;
  body: string;
};

export const ItemDetails = ({postId}: ItemDetailsProps) => {
  const [post, setPost] = useState<TPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      performExpensiveComputation();
    }, 3000);
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!post) {
    return <Text>No Post Found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      {/* This title is already processed */}
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    color: 'gray',
  },
});
