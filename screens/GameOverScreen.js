import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import TitleIos from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ rounds, userNumber, onStartNewGame }) => {
    const { width, height } = useWindowDimensions()
    let imageSize = 300
    if (width < 380) {
        imageSize = 150
    }
    if (height < 420) {
        imageSize = 80
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }
    return <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <TitleIos>GAME OVER!</TitleIos>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/finish.png')} />
            </View>
            <View>
                <Text style={styles.text}>There was <Text style={styles.variable}>{rounds}</Text> rounds needed to guess
                    number <Text
                        style={styles.variable}>{userNumber}</Text></Text>
                <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
            </View>
        </View>
    </ScrollView>
}

export default GameOverScreen


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
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