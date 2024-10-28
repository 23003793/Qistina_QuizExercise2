import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Quiz = ({ title, qn, image, correctAnswer, onAnswerSelected }) => {
    const [quizType, setQuizType] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        if (!quizType) {
            Alert.alert("Please select an answer");
            return;
        }

        // Compare the selected answer with the correct answer
        const isCorrect = quizType.toLowerCase() === correctAnswer.toLowerCase();
        onAnswerSelected(isCorrect);
        setFeedback(isCorrect ? "You are Right!" : `Wrong. The correct answer is ${correctAnswer}.`);
        setQuizType('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image
                source={image}
                style={styles.image}
            />
            <Text style={styles.question}>{qn}</Text>

            <RNPickerSelect
                onValueChange={(value) => setQuizType(value)}
                items={[
                    { label: 'Tiger', value: 'tiger' },
                    { label: 'Deer', value: 'deer' },
                    { label: 'Leopard', value: 'leopard' },
                    { label: 'Zebra', value: 'zebra' },
                    { label: 'Giraffe', value: 'giraffe' },
                ]}
                style={pickerSelectStyles}
                value={quizType}
            />
            <Button title="Submit" onPress={handleSubmit} />

            {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    question: {
        fontSize: 18,
    },
    feedback: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        marginBottom: 10,
    },
    inputAndroid: {
        fontSize: 18,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        marginBottom: 10,
    },
});

export default Quiz;






