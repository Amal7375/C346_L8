import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({name, description, image}) => {
    return (
        <View style={styles.card}>

            <View style={styles.titleRow}>
                <FontAwesome6 name='sailboat' size={26} color='gray' />
                <Text style={styles.name}>{name}</Text>
            </View>

            <Text style={styles.description}>{description}</Text>

            <Image source={image} style={styles.image} />

        </View>
    );
};

export default Boat;

// STYLE SHEET
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        marginVertical: 15,
        padding: 18,
        borderRadius: 15,

    },

    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    name: {
        marginLeft: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00275e',
        textTransform: 'uppercase',
        flexShrink: 1,
    },

    description: {
        marginTop: 5,
        marginBottom: 12,
        fontSize: 16,
        color: '#4a4a4a',
        lineHeight: 22,
    },

    image: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        resizeMode: 'cover',
        marginTop: 8,
    },
});

