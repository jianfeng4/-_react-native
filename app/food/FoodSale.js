import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import globalStyle from "../globalStyle"

import Discounts from '../json/Discounts.json'

const { width } = Dimensions.get('window')
export default class FoodSale extends Component {



    
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>超值特惠</Text>
                    <Text>更多特惠</Text>
                </View>

                <View style={styles.disBox}>
                    {Discounts.map((item, index) => {
                        return (
                            <View key={index}>
                                <Image source={{ uri: item.pic }} style={styles.img} />
                                <Text>{item.title}</Text>

                                <View style={styles.priceBox}>
                                    <Text style={styles.vipPrice}>&yen;{item.vipPrice}</Text>
                                    <Text style={styles.salePrice}>&yen;{item.salePrice}</Text>
                                </View>
                            </View>

                        )
                    })}
                </View>
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
    titleBox: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        color: globalStyle.baseColor,
        fontWeight: "bold"
    },

    img: {
        width: (width - 12 - 12) / 3,
        height: 70
    },
    disBox: {
        flexDirection: 'row'
    },
    priceBox: {
        flexDirection: "row",
        alignItems: "baseline"
    },
    vipPrice: {
        color: globalStyle.baseColor,
        marginRight: 3
    },
    salePrice: {
        fontSize: 10,
        textDecorationLine: "line-through",
        paddingBottom: 1
    }
})
