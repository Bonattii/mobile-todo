import { Image, Text, View } from 'react-native'

import Clipboard from '../../assets/clipboard.png'

import { styles } from './styles'

const EmptyList = () => (
  <View style={styles.container}>
    <Image source={Clipboard} />

    <View style={styles.textContainer}>
      <Text style={styles.title}>You don't have any task yet</Text>
      <Text style={styles.subtitle}>Create tasks and organize your todos</Text>
    </View>
  </View>
)

export default EmptyList
