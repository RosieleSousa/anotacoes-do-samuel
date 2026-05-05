import { Text, View, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  return(
    <View>
      <TextInput
      placeholder='Insira o nome do usuário:'
      value={nome}
      onChangeText={setNome}
      />
      <Button title='Enviar' />
    </View>
  )
}