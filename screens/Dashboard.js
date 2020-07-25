import React from 'react';
import { View, Text } from 'react-native';

export default ({ style }) => {
    return (
        <View
            style={{
                backgroundColor: '#88B04B',
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
                A new project coming soon
            </Text>
            
        </View>
    )
}