import React from 'react';
import { Text, TextInput } from 'react-native';


const FormInput = ({title, placeholderText, onChange}) => {
    return(
        <>
            <Text
                className="font-medium text-[10px] text-black"
            >{title}</Text>
            <TextInput
                className="mb-4 bg-white border border-gray-300 text-gray-900 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholderText}
                autoCapitalize='none'
                onChangeText={(text) => onChange(text)}
            />
        </>
    )
}

export default FormInput
