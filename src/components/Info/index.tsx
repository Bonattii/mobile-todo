import { View, Text } from 'react-native'

import { styles } from './styles'
import { InfoProps } from './types'

const Info = ({ isCreated = true, title, count }: InfoProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          isCreated ? { color: '#4EA8DE' } : { color: '#8284FA' }
        ]}
      >
        {title}
      </Text>

      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  )
}

export default Info
