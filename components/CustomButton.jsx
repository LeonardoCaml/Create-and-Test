import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoaded }) => {
    return(
        <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.4}
        className={`min-h-[50px] rounded-lg justify-center items-center ${containerStyles} ${isLoaded ? 'opacity-50' : ''}`}
        disabled={isLoaded}>
            <Text className={`font-Pmedium text-lg p-4 ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton