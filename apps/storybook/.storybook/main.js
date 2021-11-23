const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/app/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'dripsy',
          '@dripsy/core',
          'moti',
          '@motify/components',
          '@motify/core',
          '@motify/skeleton',
          'react-native-reanimated',
          'expo-linear-gradient'
        ],
        babelPlugins: ['react-native-reanimated/plugin']
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  typescript: { reactDocgen: false }
}
