import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Alert, ScrollView, FlatList } from 'react-native'

import globalStyle from "../globalStyle"

import Geolocation from '@react-native-community/geolocation'

import { getFoodPos } from '../net/Axios'

console.log(getFoodPos)

export default class FoodPos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodState: []
        }
    }

    componentDidMount() {
        Geolocation.getCurrentPosition((pos) => {
            longitude = pos.coords.longitude
            latitude = pos.coords.latitude
            getFoodPos(longitude, latitude).then(res => {
                this.setState({
                    foodState: res.data.pois
                })
            })
        })
    }

    render() {
        let foodArr = this.state.foodState
        return (
            <View style={styles.container}>
                <Text style={styles.title}>周边美食</Text>
                <ScrollView style={styles.list}>

                    {foodArr.map((item, index) => {
                        return (<View style={styles.item} key={item.id}>

                            <Image source={{ uri: item.photos.length == 0 ? 'img404' : item.photos[0].url }} style={{ width: 80, height: 80 }} />
                            <View style={styles.itemRight}>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                                <View style={styles.scoreAndPrice}>
                                    <Text style={styles.score}>评分：{item.biz_ext.rating}</Text>

                                    <Text style={styles.price}>&yen; {item.biz_ext.cost}</Text>
                                </View>
                                <Text style={styles.itemType}>{item.type}</Text>
                                <Text>距离：{item.distance}m</Text>

                            </View>
                        </View>)
                    })}
                </ScrollView>


            </View>




        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: "#fff",
        padding: 6
    },
    title: {
        color: "#333",
        fontSize: 16,
        fontWeight: "bold"
    },
    item: {
        marginTop: 8,
        marginBottom: 8,
        flexDirection: "row"
    },
    scoreAndPrice: {
        marginTop: 2,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemRight: {
        flex: 1,
        marginLeft: 10
    },
    itemTitle: {
        color: "#333",
        fontWeight: "bold"
    },
    score: {
        color: "#999",
    },
    price: {
        fontSize: 16,
        color: globalStyle.baseColor,
    },
    itemType: {
        color: "#ccc",
    }
})
