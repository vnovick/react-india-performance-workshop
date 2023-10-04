import {
  NavigationAction,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {RootStackParamList} from '../navigation/AppNavigator';

interface TileData {
  id: string;
  title: string;
  imageSrc: ImageSourcePropType;
  onPress: (navigation: NavigationProp<ReactNavigation.RootParamList>) => void;
}

const initialTilesData: TileData[] = [
  {
    id: '1',
    title: 'Simple example',
    imageSrc: require('../assets/button.png'),
    onPress: navigation => navigation.navigate('SimpleExample'),
  },
  {
    id: '2',
    title: 'Input Example Screen',
    imageSrc: require('../assets/button.png'),
    onPress: navigation => navigation.navigate('InputExampleScreen'),
  },
  {
    id: '3',
    title: 'Feature 3',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '4',
    title: 'Feature 4',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '5',
    title: 'Feature 5',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '6',
    title: 'Feature 6',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '7',
    title: 'Feature 7',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '8',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '9',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '9',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '10',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '11',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '12',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '13',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '14',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '15',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '16',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
  {
    id: '17',
    title: 'Feature',
    imageSrc: require('../assets/button.png'),
    onPress: () => alert('Feature Pressed!'),
  },
];

export const MenuTiles: React.FC = () => {
  const [tilesData, setTilesData] = useState<TileData[]>(initialTilesData);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Instantiate navigation
  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedData = tilesData.map(tile => ({
        ...tile,
        title: `${tile.title}`,
      }));
      setTilesData(updatedData);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [tilesData]);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {tilesData.map(tile => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => tile.onPress(navigation)}>
          <Image source={tile.imageSrc} style={styles.image} />
          <Text style={styles.title}>{tile.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    marginRight: 8,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    color: 'white',
  },
});
