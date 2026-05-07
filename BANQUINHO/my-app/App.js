import { Text, View, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { supabase } from './src/supabase';

export default function App() {
  const [desejo, setDesejo] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setsenha] = useState('');
  const [session, setSession] = useState (null);
  const [loading, setLoading] = useState(true);

  async function verificarSessao() {
    const resposta = await supabase.auth.getSession();
    setSession(resposta.data.session);
    setLoading(false);
    
  }
  async function monitorarSessao() {
    const resposta = supabase.auth.onAuthStateChange((evento, sessao) => {
      setSession(sessao);
    })
    return resposta.data.subscription;
  }

  useEffect(() => {
    verificarSessao();
    const inscricao = monitorarSessao();
    return () => inscricao.unsubscribe();
  }, []);

  /* login, cadastro logout*/

  async function login () {
    const resposta = await supabase.auth.signInWithPassword(
      {
        email:email,
      password:senha
      }
      )
      if(resposta.error){
        alert(`Deu erro ao fazer login ${resposta.error.message}`);
      }else{
        alert('Login realizado!!')
      }
  }

    async function registrar () {
      const resposta = await supabase.auth.signUp(
      {
        email:email,
      password:senha
      }
      )
      if(resposta.error){
        alert(`Deu erro ao fazer cadastro ${resposta.error.message}`);
      }else{
        alert('Cadastro realizado!!')
      }
  }

    async function logout () {
    const resposta = await supabase.auth.signOut();
  }


  async function inserirRegistro() {
    const resposta = await supabase
      .from('listasdesejos')
      .insert([{
        titulo:desejo,
        descricao:detalhes

      }]);
    if(resposta.error) {
      alert('Ocorreu um erro ao enviar os dados ao banco '+resposta.error.message);
    }else{
      alert('Deu certo :)')
    }
    
  }

  return(
    <View>
      <TextInput
      placeholder='Insira o nome do usuário:'
      value={desejo}
      onChangeText={setDesejo}
      />
      <TextInput
      placeholder= 'insira seu desejo:'
      value={detalhes}
      onChangeText={setDetalhes}/>
      <Button title='Enviar' onPress={inserirRegistro}/>

      
    </View>
  )
}