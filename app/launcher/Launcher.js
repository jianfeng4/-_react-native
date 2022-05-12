import React, { Component } from 'react'
import {View, Text,Image, Dimensions} from 'react-native'


const {width,height} = Dimensions.get('window')

export default class Launcher extends Component {
    render() {
        return (
            <View>
                <Image 
                source={{uri:"launcher_image"}}
                style={{height,width}}
                />
            </View>
        )
    }
}