import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

const InstructionTitle = ({ children, style }) => {
    return <Text style={[styles.textInstruction, style]}>{children}</Text>
}

export default InstructionTitle

const styles = StyleSheet.create({
    textInstruction: {
        fontFamily: 'Rem',
        color: Colors.accent,
        fontSize: 24,
    },
})