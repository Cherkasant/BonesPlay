import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ rounds, userNumber, onStartNewGame }) => {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/finish.png')} />
        </View>
        <View>
            <Text style={styles.text}>There was <Text style={styles.variable}>{rounds}</Text> rounds needed to guess
                number <Text
                    style={styles.variable}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
    </View>
}

export default GameOverScreen


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        borderRadius: 200,
        width: 350,
        height: 350,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    text: {
        fontFamily: 'Rem',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    variable: {
        fontFamily: 'Rem',
        color: Colors.primary500,
    },
})