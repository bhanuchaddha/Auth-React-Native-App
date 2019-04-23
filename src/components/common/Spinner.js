import React from 'react'
import { View, ActivityIndicator } from 'react-native'


export function Spinner({ size }) {
    return (
        <View style={styles.containerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
}
