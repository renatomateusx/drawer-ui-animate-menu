import React from 'react';
import { View, Text } from 'react-native';

export default ({ style }) => {
    return (
        <View
            style={{
                backgroundColor: '#FFC46B',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }}
        >
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold'
            }}>
                Does you want to send me a message?
            </Text>
            <Text style={{
                fontSize: 13,
                fontWeight: '300'
            }}>
                Call me on WhatsApp
            </Text>
            <Text style={{
                fontSize: 12,
                fontWeight: '300'
            }}>
                +55 71 9 9130-6561
            </Text>
        </View>
    )
}