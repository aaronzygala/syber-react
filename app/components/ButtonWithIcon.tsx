import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';


const ButtonWithIcon = ({icon, buttonText}) => {
    return(
        <TouchableOpacity className="w-[150px] flex flex-row text-white bg-white border-[#60606038]/[0.22] border-[1px] rounded-md px-5 py-2.5 items-center">
            {icon}
            <Text className="ml-2 text-sm font-medium">{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonWithIcon
