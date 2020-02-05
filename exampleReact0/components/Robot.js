import React , { Component }  from 'react';
import { Image } from 'react-native';

export default class Robot extends Component {
  render() {
      const imageSource = {url: "https://img3.bgxcdn.com/thumb/large/oaupload/banggood/images/05/E5/da2c1cba-247d-4b91-b3a3-c90a34617f91.png"};

      return (

        <Image source = {imageSource}
              style = {{width: 300, height: 200 }}
        ></Image>
      );

  }
}
