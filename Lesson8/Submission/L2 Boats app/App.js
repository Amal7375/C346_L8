import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Boat from './Boat';

const AllBoats = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>
                Get Boat – For Sale
            </Text>

            <Boat
                name='Sea Ray 500 Sun Dancer'
                description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                image={require('./img/sea_ray.jpg')}
            />

            <Boat
                name='Four Winns Horizon 180'
                description='A sporty look and refined details truly set the Horizon 180 above all others.'
                image={require('./img/four_winns.jpg')}
            />

            <Boat
                name='Flipper 640 ST'
                description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                image={require('./img/flipper.jpg')}
            />

            <Boat
                name='Princess V48'
                description='Open design with a full-length cockpit and sunroof, or enclosed saloon with climate control.'
                image={require('./img/princess.jpg')}
            />

            <Boat
                name='Bayliner 175 Bowrider'
                description='Outboard power gives increased space and quiet, fuel-efficient performance.'
                image={require('./img/bayliner.jpg')}
            />

            <Boat
                name='Fairline Targa 47'
                description='Stretch out on the large sun bed while friends lounge in the generous cockpit.'
                image={require('./img/fairline.jpg')}
            />

        </ScrollView>
    );
};

export default AllBoats;

// STYLE SHEET

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingHorizontal: 12,
        backgroundColor: '#E7F3FF',
    },
    headerText: {
        fontStyle: 'italic',
        fontSize: 20,
        color: '#003f8c',
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '600',
    },
});

