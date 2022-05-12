import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, FlatList, } from 'react-native'
const { width } = Dimensions.get('window')
import featrueData from '../json/FeatureData.json'

import globalStyle from '../globalStyle'


export default class FoodMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curPage: 1
        }
        this.handleMomentumScrollEnd = this.handleMomentumScrollEnd.bind(this)
    }

    handleMomentumScrollEnd(e) {
        //获取滑动的偏移量
        let offSetX = e.nativeEvent.contentOffset.x;
        this.setState({
            curPage: offSetX == 360 ? 2 : 1
        })
    }

    render() {
        return (
            <View style={styles.box}>
                <ScrollView
                    horizontal={true}		//水平排列
                    pagingEnabled={true}	//滚动条倍数滚动
                    showsHorizontalScrollIndicator={false} 	//不显示横向滚动条

                    // 这是ScrollView组件自带的事件属性，当滚动的时候会被触发
                    onMomentumScrollEnd={this.handleMomentumScrollEnd}
                >
                    {/* 多屏展示 */}
                    <View style={styles.box1}>
                        <FlatList
                            numColumns={5}		//每行显示个数
                            data={featrueData.data[0]}	//数据源
                            renderItem={this.renderIcon}	//渲染函数
                        />
                        <FlatList
                            numColumns={5}		//每行显示个数
                            data={featrueData.data[1]}	//数据源
                            renderItem={this.renderIcon}	//渲染函数
                        />
                    </View>
                    <View style={styles.box1}>

                        <FlatList
                            numColumns={5}		//每行显示个数
                            data={featrueData.data[2]}	//数据源
                            renderItem={this.renderIcon}	//渲染函数
                        />
                        <FlatList
                            numColumns={5}		//每行显示个数
                            data={featrueData.data[3]}	//数据源
                            renderItem={this.renderIcon}	//渲染函数
                        />
                    </View>
                </ScrollView>
                {/* 添加小圆点 */}
                <View style={styles.pointBox} >
                    <View style={this.state.curPage == 1 ? styles.currentPoint : styles.point
                    } />
                    <View style={this.state.curPage == 2 ? styles.currentPoint : styles.point
                    } />
                </View>
            </View>

        )
    }

    renderIcon({ item }) {
        return (
            <View style={styles.iconBox}>
                <Image source={{ uri: item.image }} style={{ width: 45, height: 45 }} />
                <Text style={{ fontSize: 12 }}>{item.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        marginTop: 5,
    },
    box1: {
        width,
        // backgroundColor: 'pink',
        paddingBottom: 5,
        paddingTop: 5,
    },
    iconBox: {
        width: width / 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    pointBox: {
        height: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    //小圆点默认样式
    point: {
        backgroundColor: '#ccc',
        width: 5,
        height: 5,
        borderRadius: 5,
        marginRight: 3
    },
    //当前的小圆点
    currentPoint: {
        backgroundColor: globalStyle.baseColor,
        width: 5,
        height: 5,
        borderRadius: 5,
        marginRight: 3
    },
})
