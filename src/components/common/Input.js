import React from 'react'
import { View, Text, TextInput } from 'react-native';

export function Input({ label, value, onChangeText, placeholder, secureTextEntry }) {

    const { labelStyle, textStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                autoCapitalize={'none'}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={textStyle}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = {
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 20
    },
    textStyle: {
        flex: 2,
        fontSize: 18,
        lineHeight: 23,
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,

    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    }
}
