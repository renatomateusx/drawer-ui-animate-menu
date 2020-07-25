import React from 'react';
import { View, Text } from 'react-native';

export default ({ style }) => {
    return (
        <View
            style={{
                backgroundColor: '#41D5FB',
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
                Contact me at
            </Text>
            <Text style={{
                fontSize: 13,
                fontWeight: '300'
            }}>
                renatomateusx@gmail.com
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