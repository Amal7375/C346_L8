import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Image, Alert, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const QuizQuestion = ({question, image, op1, op2, op3, onSelect}) => {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
                {question}. What sport is this?
            </Text>

            <Image source={{uri: image}} style={styles.image} />

            <Picker style={styles.picker} onValueChange={(value) => onSelect(value)}>
                <Picker.Item label={op1} value={op1}/>
                <Picker.Item label={op2} value={op2}/>
                <Picker.Item label={op3} value={op3}/>
            </Picker>
        </View>
    );
};

const QuizApp = () => {

    // State
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');

    const checkAnswers = () => {
        let score = 0;

        if (ans1 === 'Badminton') score++;
        if (ans2 === 'PickleBall') score++;
        if (ans3 === 'Football') score++;

        let message = '';

        if (score === 3) message = 'You scored full marks!';
        else if (score === 2) message = 'Good try!';
        else message = "Time to stop playing on your phone. Go outside and play for real!";

        Alert.alert(`Your Score: ${score}`, message);
    };

    return (
        <ScrollView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <MaterialIcons name="sports-handball" size={32} color="black" />
                <Text style={styles.headerText}>GUESS THE SPORT...</Text>
            </View>

            {/* Questions */}
            <QuizQuestion
                question={1}
                image={'https://www.shutterstock.com/shutterstock/photos/2471771317/display_1500/stock-photo-feather-badminton-shuttlecocks-and-rackets-on-blue-background-space-for-text-2471771317.jpg'}
                op1={'Football'}
                op2={'Badminton'}
                op3={'Pickle ball'}
                onSelect={(value) => setAns1(value)}
            />

            <QuizQuestion
                question={2}
                image={'https://www.shutterstock.com/shutterstock/photos/2194031523/display_1500/stock-photo-senior-picklebsll-player-about-to-serve-holding-the-ball-2194031523.jpg'}
                op1={'Football'}
                op2={'Badminton'}
                op3={'PickleBall'}
                onSelect={(value) => setAns2(value)}
            />

            <QuizQuestion
                question={3}
                image={'https://www.shutterstock.com/shutterstock/photos/2455448973/display_1500/stock-photo-kids-play-football-on-outdoor-stadium-field-children-score-a-goal-during-soccer-game-little-boy-2455448973.jpg'}
                op1={'Football'}
                op2={'Badminton'}
                op3={'Pickle ball'}
                onSelect={(value) => setAns3(value)}
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitBtn} onPress={checkAnswers}>
                <Text style={styles.submitText}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default QuizApp;


//    STYLE SHEET

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 50,
        backgroundColor: 'lightblue',
        paddingHorizontal: 10,
    },

    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
    },

    // Question Block
    questionContainer: {
        marginVertical: 15,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,

    },
    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e90ff',
        textAlign: 'center',
    },

    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },

    picker: {
        marginTop: 10,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 10,
    },

    // Submit Button
    submitBtn: {
        backgroundColor: 'deepskyblue',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    submitText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
