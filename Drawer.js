import React from 'react';
import { Image, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView
} from '@react-navigation/drawer';

import Animated from 'react-native-reanimated';
import { Feather, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

//screens

import Dashboard from './screens/Dashboard';
import Contact from './screens/Contact';
import Messages from './screens/Messages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ backgroundColor: 'transparent' }}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} />
                        </TouchableOpacity>
                    ),
                }}>
                <Stack.Screen name="Dashboard">{props => <Dashboard {...props} />}</Stack.Screen>
                <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
                <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen>
            </Stack.Navigator>
        </Animated.View>
    );
};

const DrawerContent = props => {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
            <View>
                <View style={{ flex: 0.4, margin: 20, marginBottom: 50 }}>
                    <Image
                        source={{
                            uri: 'https://avatars1.githubusercontent.com/u/4579323?s=460&u=e01fef7cbb485416b1ce6d96d38aabb00983e4fb&v=4',
                            height: 60,
                            width: 60,
                            scale: 0.5,
                        }}
                        resizeMode="center"
                        style={styles.avatar}
                    />
                    <Text style={{ color: 'white', fontSize: 15, alignSelf: 'center' }}>
                        Renato Moura
                    </Text>
                    <Text style={{ color: 'white', fontSize: 10, alignSelf: 'center' }}>
                        renatomateusx@gmail.com
                    </Text>
                    <Text style={{ color: 'white', fontSize: 9, alignSelf: 'center' }}>
                        +55 71 9 9130-6561
                    </Text>
                </View>
                <View style={{ marginTop: 20, marginVertical: 90, marginTop: 90 }}>
                    <DrawerItem
                        label="Dashboard"
                        labelStyle={{ color: 'white', marginLeft: 0 }}
                        style={styles.drawerItem}
                        onPress={() => props.navigation.navigate('Dashboard')}
                        icon={() => <AntDesign name="dashboard" color="white" size={16} />}
                    />
                    <DrawerItem
                        label="Contact"
                        labelStyle={{ color: 'white', marginLeft: 0 }}
                        style={styles.drawerItem}
                        onPress={() => props.navigation.navigate('Contact')}
                        icon={() => <AntDesign name="phone" color="white" size={16} />}
                    />
                    <DrawerItem
                        label="Messages"
                        labelStyle={{ color: 'white', marginLeft: 0 }}
                        style={styles.drawerItem}
                        onPress={() => props.navigation.navigate('Messages')}
                        icon={() => <AntDesign name="message1" color="white" size={16} />}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <DrawerItem
                    label="Logout"
                    labelStyle={{ color: 'white' }}
                    style={{ marginVertical: 20 }}
                    icon={() => <AntDesign name="logout" color="white" size={16} />}
                    onPress={() => alert('Are your sure to logout?')}
                />
            </View>
        </DrawerContentScrollView>
    );
};


export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.6],
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
    });

    const animatedStyle = { borderRadius, transform: [{ scale }] };

    return (
        <LinearGradient style={{ flex: 1 }} colors={['red', 'blue']}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={styles.drawerStyles}
                contentContainerStyle={{ flex: 1 }}
                drawerContentOptions={{
                    activeBackgroundColor: 'transparent',
                    activeTintColor: 'white',
                    inactiveTintColor: 'white'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                drawerContent={props => {
                    setProgress(props.progress);
                    return <DrawerContent {...props} />
                }}
            >
                <Drawer.Screen name="Screens">
                    {props => <Screens {...props} style={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    stack: {
        flex: 1,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
        overflow: 'hidden',
    },
    drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
    drawerItem: { alignItems: 'flex-start' },
    drawerLabel: { color: 'white', marginLeft: 0 },
    avatar: {
        borderRadius: 60,
        marginBottom: 16,
        borderColor: 'transparent',
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        alignSelf: 'center'
    },
});