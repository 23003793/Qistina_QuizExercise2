import React, { useState } from 'react';
import { View, StatusBar, ScrollView, Button, Alert } from 'react-native';
import Quiz from './components/Quiz';

const quizzes = [
    { title: "Animal Quiz", qn: "What animal is this?", image: require('./img/zebra.jpg'), correctAnswer: 'Zebra' },
    { title: "Animal Quiz", qn: "What animal is this?", image: require('./img/deer.jpg'), correctAnswer: 'Deer' },
    { title: "Animal Quiz", qn: "What animal is this?", image: require('./img/leopard.jpg'), correctAnswer: 'Leopard' },
    { title: "Animal Quiz", qn: "What animal is this?", image: require('./img/giraffe.jpg'), correctAnswer: 'Giraffe' },
    { title: "Animal Quiz", qn: "What animal is this?", image: require('./img/tiger.jpg'), correctAnswer: 'Tiger' },
];

const App = () => {
    const [score, setScore] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);

    const handleAnswerSelected = (isCorrect) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
        // Move to the next question or finish quiz
        if (questionIndex < quizzes.length - 1) {
            setQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            handleFinishQuiz();
        }
    };

    const handleFinishQuiz = () => {
        Alert.alert(`You got: ${score} out of ${quizzes.length}`);
        // Reset score and question index if needed
        setScore(0);
        setQuestionIndex(0);
    };

    return (
        <>
            <StatusBar hidden={true} />
            <ScrollView>
                <View style={{ padding: 16 }}>
                    <Quiz
                        title={quizzes[questionIndex].title}
                        qn={quizzes[questionIndex].qn}
                        image={quizzes[questionIndex].image}
                        correctAnswer={quizzes[questionIndex].correctAnswer}
                        onAnswerSelected={handleAnswerSelected}
                    />
                    {questionIndex === quizzes.length - 1 && (
                        <Button title="Submit Answers" onPress={handleFinishQuiz} />
                    )}
                </View>
            </ScrollView>
        </>
    );
};

export default App;







