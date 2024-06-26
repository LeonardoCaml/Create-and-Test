import { View, Text, FlatList, Image } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'

import SuposedPost from '../../constants/SuposedPost.js'
import Icons from '../../constants/Icons.js'
import post from "../../constants/SuposedPost.js"

const Home = () => {
    return (
        <SafeAreaView className=''>
            <FlatList
            data={ SuposedPost }
            keyExtractor={(item) => {item.nickname, item.fotoIcon, item.post, item.description}}
            renderItem={({ item }) => (
                <View className='flex-row items-start justify-between p-2 my-5'>
                    <Image source={item.fotoIcon}
                    className='w-[42] h-[42] rounded-full'/>
                    <View
                    className='flex-col items-start w-[80vw] mr-2'>
                        <View className='flex-row justify-between w-full'>
                            <Text className=' font-Psemibold'>{ item.nickname }</Text>
                            <Image source={ Icons.more }
                            className='w-5'/>
                        </View>
                        <Image source={ item.post }
                        className='rounded w-full h-[320] mt-6'/>
                        <Text className=' font-Pmedium my-4'>{ item.description }</Text>
                        <View className='flex-row gap-4'>
                            <View className='flex-row items-center'>
                                <Image source={ Icons.like }
                                className='w-6 h-6'/>
                                <Text className='max-w-[100] mx-3'>{ item.likes } likes</Text>
                            </View>
                            <View className='flex-row items-center'>
                                <Image source={ Icons.comment }
                                className='w-6 h-6'/>
                                <Text className='max-w-[100] mx-3'>{ item.comments } comments</Text>
                            </View>
                        </View>
                    </View>
                </View>
        )}/>
        </SafeAreaView>
    )
}

export default Home