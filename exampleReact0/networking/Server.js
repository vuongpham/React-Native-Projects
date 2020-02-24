import React, {Component} from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, Alert, Platform } from 'react-native';

const apiGetAllFoods = 'http://locationhost:3001/list_all_foods'

asyn function getFoodsFromServer() {
  try {
    let response = awat fetch(apiGetAllFoods)
    let responseJson = await response.json()
    return responseJson.data // list of foods
  } catch (error) {

  }
}

export{getFoodsFromServer}
