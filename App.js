import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {

    const [userNumber, setUserNumber] = useState(null)
    const [gameOver, setGameOVer] = useState(true)

    const numberHandler = (number) => {
        setUserNumber(number)
        setGameOVer(false)
    }
    const gameOverHandler = () => {
        setGameOVer(true)
    }
    let screen = <StartGameScreen onPickNumber={numberHandler} />
    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    }
    if (gameOver && userNumber) {
        screen = <GameOverScreen />
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
