import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'

import Logo from '../../assets/logo.png'
import Info from '../../components/Info'
import Task from '../../components/Task'
import EmptyList from '../../components/EmptyList'

import { styles } from './styles'
import useHomeController from './controller'

const Home = () => {
  const {
    isFocused,
    newTask,
    setNewTask,
    setIsFocused,
    handleAddTask,
    tasks,
    handleRemoveTask,
    handleFinishedTask,
    doneTasksCount
  } = useHomeController()

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
        <Info title="Created" count={tasks.length} />
        <Info title="Finished" count={doneTasksCount} isCreated={false} />
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={tasks.sort((a, b) => Number(a.isDone) - Number(b.isDone))}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            isDone={item.isDone}
            onRemove={() => handleRemoveTask(item.id)}
            onFinished={() => handleFinishedTask(item.id)}
          />
        )}
      />
    </View>
  )
}

export default Home
