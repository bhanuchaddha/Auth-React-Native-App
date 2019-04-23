import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


export function Button({ onPress, children }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#0071ff'

    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5

    }
}
