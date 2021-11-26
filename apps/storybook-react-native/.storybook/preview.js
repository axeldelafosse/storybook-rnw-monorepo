import { View } from 'react-native'
import { DripsyProvider } from 'dripsy'
import { theme } from 'app/theme'

export const decorators = [
  (Story) => (
    <DripsyProvider theme={theme}>
      <MainAxisCenter>
        <Story />
      </MainAxisCenter>
    </DripsyProvider>
  )
]

const MainAxisCenter = ({ children }) => {
  return <View style={{ flex: 1, justifyContent: 'center' }}>{children}</View>
}

export const parameters = {}
