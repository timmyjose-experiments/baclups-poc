import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../App'
import {Pressable, View, Text} from 'react-native'
import styles from '../styles'

const IOSBackup = () => {
  const navigaton = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigaton.navigate('Main')}>
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default IOSBackup
