import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import OptionsList from '../../components/OptionsList';
import {listItems} from '../../listItems';

const HomeDefault = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <FlatList
          data={listItems}
          renderItem={({item}) => (
            <OptionsList item={item} navigation={navigation} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default HomeDefault;
