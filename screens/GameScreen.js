import { Alert, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import { useEffect, useState } from 'react'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

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

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

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
        console.log(min, max)
        const newRandomNumber = generateRandomNumber(min, max, currentGuess)
        setCurrentGuess(newRandomNumber)
    }

    return <View style={styles.screen}>
        <Title>{'Opponent guess'}</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or lower?</Text>
            <View>
                <PrimaryButton onPress={nextNumberHandler.bind(this, 'lower')}>{'-'}</PrimaryButton>
                <PrimaryButton onPress={nextNumberHandler.bind(this, 'greater')}>{'+'}</PrimaryButton>
            </View>
        </View>
        <View>
            <Text>LOG rounds</Text>
        </View>
    </View>
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

})