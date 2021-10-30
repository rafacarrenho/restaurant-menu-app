import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const ProductItem = ({data}) => {
  return (
    <View style={styles.productItem}>
      <Image
        resizeMode="contain"
        source={data.img}
        style={styles.productImagem}
      />
      <Text style={styles.productName}>{data.name}</Text>
    </View>
  );
};

const HomeProductsList = ({route}) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={route.params.products}
        renderItem={({item}) => <ProductItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    height: 100,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImagem: {
    width: 150,
    height: 80,
  },
  productName: {
    fontSize: 16,
  },
});

export default HomeProductsList;
