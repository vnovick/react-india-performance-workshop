import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import {Card, Text, Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';

type TNews = {
  id: number;
  title: string;
  body: string;
};

export const NewsFeed: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(json => {
          setData(json);
          setLoading(false);
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false));

      // Continuously fetching new posts every 5 seconds without clearing interval
    }, 5000);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        data.map((news: TNews) => (
          <Card key={news.id} containerStyle={styles.newsItem}>
            <Card.Image
              source={require('../assets/goa-ai.png')}
              style={styles.newsImage}
            />
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Button
              size="sm"
              type="clear"
              onPress={() =>
                navigation.navigate('Details', {
                  postId: `${news.id}`,
                })
              }>
              Learn More
            </Button>
          </Card>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  newsItem: {
    width: 250,
    padding: 8,
    marginRight: 16,
    borderRadius: 8,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  newsTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
