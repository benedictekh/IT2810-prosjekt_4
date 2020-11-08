import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/rootReducer';
import { fetchRestaurants } from './store/ducks/restaurantDuck';
import {IRestaurant} from '../backend/models/Restaurant';
import { sortingType } from './store/ducks/sortingDuck';
import thunk from 'redux-thunk';
import Restaurants from './components/Restaurants';



// Types for all the redux states 
export type stateType = {
  restaurant: IRestaurant[],
  regionFilter: string[],
  priceFilter: string[],
  cuisineFilter: string[],
  search: string,
  sorting: sortingType,
  skip: number,
  counter: number
}


export default function App() {

  const middlewares = [thunk];

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  

    return (
    <Provider store={store}>
    <View>
    <Header/>
    <ScrollView>
    <Searchbar/>
      <View style={styles.container}>
      </View>
      <Restaurants></Restaurants>
    </ScrollView>
    </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'lightgrey',
  },
  text: {color: 'blue', 
  fontSize:30}
});

