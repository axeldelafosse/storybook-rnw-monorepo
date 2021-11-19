import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'dripsy'

export type ButtonProps = {
  onPress: () => void
  title: string
  color?: string
  textColor?: string
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1
  }
})

export const Button = ({ title, onPress, color, textColor }: ButtonProps) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, !!color && { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
)
