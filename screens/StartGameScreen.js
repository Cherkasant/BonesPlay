import { Alert, StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }
    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [{
                text: 'Ok',
                style: 'destructive',
                onPress: resetInputHandler,
            }])
            return
        }
        onPickNumber(chosenNumber)
    }

    return <View style={styles.inputContainer}>
        <TextInput style={styles.input} maxLength={2} keyboardType={'number-pad'} autoCapitalize={'none'}
                   autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}
export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        backgroundColor: Colors.primary700,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    input: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent,
        borderBottomWidth: 2,
        color: Colors.accent,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
    },
})