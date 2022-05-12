import React, { Component } from 'react'
import { View, Text , StyleSheet, Image, Dimensions, TextInput} from 'react-native' 
import globalStyle from '../globalStyle'
let { width, height } = Dimensions.get('window')



export default function FoodTop() {
  return (
    <View style={styles.container} >
          <Text style={styles.title}>广州市▼</Text>
          <View style={styles.searchView}>
              <Image style={styles.icon} source={{uri: 'icon_search'}} />
              <TextInput 
                placeholder={'请输入...'} 
                style = {{height: 40, flex: 0.95}} 
                underlineColorAndroid='transparent'/>
          </View>
          <Image style={styles.userIcon} source={{uri: 'icon_user'}} />
      </View>
    )
  }


const styles = StyleSheet.create({
    container: {
        backgroundColor: globalStyle.baseColor,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    icon: {
        width: 20,
        height: 20
    },
    searchView: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 30,
        width: width - 30 - 56 - 20,// 图标30 文字56(单个文字默认大小为14) 其他间隙20(自定义)
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    },
    userIcon: {
        width: 30,
        height: 30
    },
    title: {
        color: '#FFF',
    }
})