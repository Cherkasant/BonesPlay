import { Alert, FlatList, StyleSheet, View } from 'react-native'
import Title from '../components/ui/Title'
import { useEffect, useState } from 'react'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionTitle from '../components/ui/InstructionTitle'
import { AntDesign } from '@expo/vector-icons'
import LogItem from '../components/game/LogItem'

const generateRandomNumber = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude)
    } else {
        return randomNumber
    }
}
let min = 1
let max = 100

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomNumber(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRound, setGuessRound] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRound.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        min = 1
        max = 100
    }, [])

    const nextNumberHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Dont lie', 'You know that is wrong!!!', [{ text: 'Oops', style: 'Cancel' }])
            return
        }
        if (direction === 'lower') {
            max = currentGuess
        } else {
            min = currentGuess + 1
        }
        const newRandomNumber = generateRandomNumber(min, max, currentGuess)
        setCurrentGuess(newRandomNumber)
        setGuessRound(prev => [newRandomNumber, ...prev])
    }
    const roundsListLength = guessRound.length

    return <View style={styles.screen}>
        <Title>{'Opponent guess'}</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionTitle style={styles.text}>Higher or lower</InstructionTitle>
            <View style={styles.btnContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPress={nextNumberHandler.bind(this, 'lower')}><AntDesign name='minuscircleo'
                                                                                              size={24} color='white' /></PrimaryButton></View>
                <View style={styles.button}>
                    <PrimaryButton
                        onPress={nextNumberHandler.bind(this, 'greater')}>
                        <AntDesign name='pluscircleo' size={24} color='white' /></PrimaryButton></View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            <FlatList data={guessRound} keyExtractor={(item) => item} renderItem={(itemData) => (
                <LogItem guess={itemData.item} roundNumber={roundsListLength - itemData.index} />)} />
        </View>
    </View>
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    btnContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
    },
    text: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
})