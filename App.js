import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {

    const [userNumber, setUserNumber] = useState(null)
    const [gameOver, setGameOVer] = useState(true)
    const [guessRound, setGuessRounds] = useState(0)

    const [fontsLoaded] = useFonts({
        'Rem': require('../TargetApp/assets/fonts/REM-Italic-VariableFont_wght.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    const numberHandler = (number) => {
        setUserNumber(number)
        setGameOVer(false)
    }
    const gameOverHandler = (numberOfRounds) => {
        setGameOVer(true)
        setGuessRounds(numberOfRounds)
    }

    const onStartNewGameHandler = () => {
        setUserNumber(null)
        setGuessRounds(0)
    }
    let screen = <StartGameScreen onPickNumber={numberHandler} />
    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    }
    if (gameOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} rounds={guessRound} onStartNewGame={onStartNewGameHandler} />
    }


    return (<LinearGradient colors={['rgba(1,0,0,0.8)', 'transparent']} style={styles.root}>
            <ImageBackground source={require('./assets/images/background.png')}
                             resizeMode={'cover'} style={styles.root} imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
            </ImageBackground>

        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
})
