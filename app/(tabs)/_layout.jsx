import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from 'expo-router';

import Icons from "../../constants/Icons.js";

const TabIcon = ({ icon, color, focuses, name}) => {
    return (
        <View
        className="
        items-center
        justify-center
        ">
            <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className = "w-6 h-6"
            />
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    height: 60,
                    backgroundColor: 'white'
                }
            }}>
                <Tabs.Screen 
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={Icons.home}
                        color={color}
                        focuses={focused}/>
                    )
                }}/>
                <Tabs.Screen 
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={Icons.search}
                        color={color}
                        focuses={focused}/>
                    )
                }}/>
                <Tabs.Screen 
                name="publish"
                options={{
                    title: 'Publish',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={Icons.publish}
                        color={color}
                        focuses={focused}/>
                    )
                }}/>
                <Tabs.Screen 
                name="notification"
                options={{
                    title: 'Notification',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={Icons.note}
                        color={color}
                        focuses={focused}/>
                    )
                }}/>
                <Tabs.Screen 
                name="settings"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={Icons.account}
                        color={color}
                        focuses={focused}/>
                    )
                }}/>
            </Tabs>
        </>
    )
}

export default TabsLayout