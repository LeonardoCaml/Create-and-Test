import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from 'expo-router';

import Icons from "../../constants/Icons.js";

const TabIcon = ({ icon, color, focuses, name}) => {
    return (
        <View
        className="
        items-center
        justify-center
        gap-1
        ">
            <Image
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className = "w-6 h-6"
            />
            <Text className={`${ focuses ? 'font-Psemibold' : 'font-Pmedium'} text-xs`} style={{color: color}}>
                {name}
            </Text>
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
                    height: 65,
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
                        name='Home'
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
                        name='Search'
                        focuses={focused}/>
                    )
                }}/>
                <Tabs.Screen 
                name="library"
                options={{
                    title: 'Library',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                        icon={Icons.library}
                        color={color}
                        name='Library'
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
                        icon={Icons.settings}
                        color={color}
                        name='Settings'
                        focuses={focused}/>
                    )
                }}/>
            </Tabs>
        </>
    )
}

export default TabsLayout