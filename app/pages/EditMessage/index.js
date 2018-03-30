import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, TouchableHighlight, DeviceEventEmitter, NetInfo, NativeModules,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import List from '../../components/List';
import styles from './style';
import { PALETTA, SIZE } from '../../style/Common';

let CONNECT_BOOL;
const { width, height } = Dimensions.get('window');

class EditMessage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title:'修改个人信息',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={30} color={tintColor} />
        ),
    });

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.wrap}>
                        <View style={styles.text}>
                            <Text>头像</Text>
                        </View>
                        <View style={styles.head}>
                            <Image
                                resizeMode='stretch'
                                style={{ width: 50, height: 50, }}
                                source={{uri:'https://avatars2.githubusercontent.com/u/12504344?s=96&v=4'}}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.list}>
                    <List
                        iconSize={20}
                        text={'昵称'}
                        listHeight={55}
                        content={'Qyellow'}
                    />
                    <List
                        iconSize={20}
                        text={'真实姓名'}
                        listHeight={55}
                    />
                    <List
                        iconSize={20}
                        text={'邮箱'}
                        listHeight={55}
                    />
                    <List
                        iconSize={20}
                        text={'性别'}
                        listHeight={55}
                    />
                    <List
                        iconSize={20}
                        text={'专业'}
                        listHeight={55}
                        borderBottom={false}
                    />
                </View>
            </View>
            </ScrollView>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(EditMessage)
