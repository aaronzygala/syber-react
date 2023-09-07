

import React from 'react';
import { View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox'

const TermsCheckbox = ({checkBoxText}) => {
    return(
        <View className="flex -mt-1">
            <View className="flex-1">
                <CheckBox
                    onAnimationType="one-stroke"
                    boxType="square"
                    lineWidth={1.5}
                    style={{
                        width: 18,
                        height: 18,
                    }}
                />
            </View>
            
            <Text className="flex-auto ml-6 text-xs font-medium text-gray-900 dark:text-gray-300">
                {checkBoxText}
            </Text>
        </View>
    )
}

export default TermsCheckbox