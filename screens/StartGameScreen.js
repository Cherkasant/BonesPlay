import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Card from '../components/ui/Card'
import InstructionTitle from '../components/ui/InstructionTitle'
import Title from '../components/ui/Title'

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const { height } = useWindowDimensions()

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

    const marginTop = height < 380 ? 30 : 100

    return <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior={'position'}>
            <View style={[styles.rootContainer, { marginTop: marginTop }]}>
                <Title>Guess my number</Title>
                <Card>
                    <InstructionTitle>Enter a number!</InstructionTitle>
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
                </Card>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>
}
export default StartGameScreen


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 36,
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
    textInstruction: {
        color: Colors.accent,
        fontSize: 24,
    },
})