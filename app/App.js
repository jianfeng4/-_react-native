import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import Launcher from './launcher/Launcher'
import Nav from './nav/Nav'

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isShowLauncher: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                // 通过setState来让state改变是可以实现响应式的
                isShowLauncher: false
            })
        }, 2000)
    }
    render() {
        return (
            this.state.isShowLauncher?
            <Launcher />:
            <Nav />
        )
    }
}

const styles = StyleSheet.create({})