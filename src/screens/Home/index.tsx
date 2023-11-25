import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

import Logo from '../../assets/logo.png'
import Info from '../../components/Info'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Info title="Created" count={0} />
        <Info title="Finished" count={0} isCreated={false} />
      </View>
    </View>
  )
}

export default Home
