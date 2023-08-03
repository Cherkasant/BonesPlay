import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'

const NumberContainer = ({ children }) => {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}
export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'Rem',
        color: Colors.accent,
        fontWeight: 'bold',
        fontSize: deviceWidth < 380 ? 24 : 36,
    },
})