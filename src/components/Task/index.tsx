import { Image, Text, TouchableOpacity, View } from 'react-native'

import Trash from '../../assets/trash.png'
import Check from '../../assets/check.png'

import { TaskProps } from './types'
import { styles } from './styles'

const Task = ({ title, isDone, onRemove, onFinished }: TaskProps) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={isDone ? styles.checkedButton : styles.checkButton}
      onPress={onFinished}
    >
      <Image source={isDone ? Check : undefined} />
    </TouchableOpacity>

    <Text style={isDone ? styles.doneTitle : styles.title}>{title}</Text>

    <TouchableOpacity onPress={onRemove}>
      <Image source={Trash} />
    </TouchableOpacity>
  </View>
)

export default Task
