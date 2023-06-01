import React from 'react';
import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native';

export default function Landing({ navigation }) {
  return (
    <View styles={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
    
    
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
     </View>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'    
    }
})