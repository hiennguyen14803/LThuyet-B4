import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CATEGORIES = [
  { id: '1', title: 'Pizza hải sản', image: require('../assets/anh2.jpg') },
  { id: '2', title: 'Pesi', image: require('../assets/anh3.jpg') },
  { id: '3', title: 'Rau trộn thập cẩm', image: require('../assets/anh4.jpg') },
  { id: '4', title: 'Pesi', image: require('../assets/anh3.jpg') },
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    return (
      <TouchableOpacity 
        style={styles.gridItem} 
        onPress={() => navigation.navigate('Meals', { categoryId: itemData.item.id })}
      >
        <View>
          <Image source={itemData.item.image} style={styles.image} />
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList 
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '72%',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CategoriesScreen;
