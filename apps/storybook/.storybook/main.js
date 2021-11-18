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
          // 'twrnc',
          'moti',
          '@motify/components',
          '@motify/core',
          '@motify/skeleton',
          '@motify/interactions',
          // 'expo-next-react-navigation',
          // '@zeego/menu',
          // '@zeego/dropdown-menu',
          'react-native-reanimated'
        ],
        babelPlugins: ['react-native-reanimated/plugin']
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  typescript: { reactDocgen: false },
  webpackFinal: async (config) => {
    config.module.rules[config.module.rules.length - 1].include.push(
      path.resolve('../../packages/app')
    )

    return config
  }
}
