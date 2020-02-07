import React, {Component} from 'react';
import { Text, View, FlatList, StyleSheet, Image, Alert } from 'react-native';
import  flatListData from './flatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null
    };
  }

  render() {

    const swipeSettings = {
      autoClose:true,
      onClose: (secId, rowId, derection) => {
        if (this.state.activeRowKey != null) {
          this.setState({ actionRowKet: null });
        }
      },

      onOpen: (secId, rowId, derection) => {
        if (this.state.activeRowKey != null) {
          this.setState({ actionRowKet: this.props.item.key });
        }
      },

      right: [
        {
          onPress: () => {

            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Alert',
              'Are you sure you want to delete ?',
              [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Yes', onPress: ()=> {
                  flatListData.splice(this.props.index, 1);
                  // refresh FlatList
                  this.props.parentFlatList.refreshFlatList()
                }
              }
              ],
              { cancelable: true}
            )
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.index,
      sectionID: 1

    }

    return (
      <Swipeout {...swipeSettings}>
              <View style= {{flex: 1 ,
                      flexDirection: 'row'}}>
                    <Image source= {{uri: this.props.item.imageUrl}}
                          style= {{width: 100, height: 100, margin: 5}}>
                    </Image>

                  <View style={{
                    flex:1,
                    flexDirection: 'column',
                    //backgroundColor: this.props.index % 2 == 0 ? 'red' :'blue',
                    backgroundColor: 'mediumseagreen',
                    justifyContent: 'space-between',
                    marginTop : 5,

                  }}>

                        <Text style= {styles.flatListItem}> {this.props.item.name}</Text>
                        <Text style= {styles.flatListItem }> {this.props.item.des}</Text>
                  </View>
              </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color:'white',
    marginTop: 5,
    padding: 0,
    fontSize: 16,
  }
});

export default class BasicFlatList extends Component {

  constructor(props){
    super(props);
    this.state = ({
      deleteRowKey: null
    });
  }

  refreshFlatList = (deleteKey) => {
    this.setState( ()=> {
      return {
        deleteRowKey: deleteKey
      }
    })
  }

  render() {
    return (
      <View style= {{flex: 1, marginTop: 60}}>
            <FlatList
                data= {flatListData}
                renderItem= {
                  ({item, index})=> {
                    console.log(` item = ${JSON.stringify(item)}, index= ${index} `)

              return (
                <FlatListItem item={ item} index={ index} parentFlatList= {this}></FlatListItem>
              );

                  }
                }
            >
            </FlatList>
      </View>
    );
  }
}
