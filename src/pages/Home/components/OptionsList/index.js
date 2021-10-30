import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const OptionsList = ({item, navigation}) => {
  const openOption = () =>
    navigation.navigate('HomeProductsList', {
      title: item.title,
      products: item.products,
    });

  return (
    <TouchableHighlight onPress={openOption}>
      <View style={{...styles.list, backgroundColor: item.bg}}>
        <Image source={item.img} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 100,
    fontSize: 12,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    marginRight: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default OptionsList;
