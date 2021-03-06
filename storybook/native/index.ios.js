import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'

configure(() => {
  require('../../stories/preface')
}, module)

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' })
AppRegistry.registerComponent('core_ui_kit', () => StorybookUI)
export default StorybookUI
