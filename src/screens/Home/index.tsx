import { useState } from 'react'
import uuid from 'react-native-uuid'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native'

import Logo from '../../assets/logo.png'
import Info from '../../components/Info'

import { styles } from './styles'
import { Task } from './types'
import EmptyList from '../../components/EmptyList'

const Home = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<string>('')

  const handleAddTask = () => {
    if (newTask === '') {
      return Alert.alert(
        'Empty Task',
        'A task cannot be empty, please enter a valid task.'
      )
    }

    setTasks((prevState) => [
      ...prevState,
      { id: uuid.v4().toString(), title: newTask, isDone: false }
    ])
    setNewTask('')
  }

  const handleRemoveTask = () => {}

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="Add a new task"
          placeholderTextColor="#808080"
          value={newTask}
          onChangeText={setNewTask}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Info title="Created" count={0} />
        <Info title="Finished" count={0} isCreated={false} />
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={tasks}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  )
}

export default Home
