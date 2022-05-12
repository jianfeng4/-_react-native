import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'

import FoodTop from './FoodTop'
import FoodMenu from './FoodMenu'
import FoodSale from "./FoodSale"
import FoodPos from "./FoodPos"

export default function Food() {
    return (
        <View>
            <ScrollView>
                <FoodTop />
                <FoodMenu />
                <FoodSale />
                <FoodPos />
               
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({})