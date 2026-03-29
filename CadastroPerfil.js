import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { supabase } from './supabaseClient';

export default function CadastroPerfil() {
  const [nome, setNome] = useState('');
  const [registro, setRegistro] = useState('');
  const [tipo, setTipo] = useState('Protético');

  async function salvarPerfil() {
    const { data, error } = await supabase
      .from('perfis')
      .insert([
        { nome_completo: nome, registro_profissional: registro, tipo_profissional: tipo }
      ]);

    if (error) {
      Alert.alert('Erro', 'Não foi possível salvar: ' + error.message);
    } else {
      Alert.alert('Sucesso!', 'Perfil da GODENT criado com sucesso!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Crie seu Perfil GODENT</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Nome Completo" 
        onChangeText={setNome}
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="CRO ou TPD" 
        onChangeText={setRegistro}
      />

      <View style={styles.row}>
        <TouchableOpacity 
          style={[styles.btnTipo, tipo === 'Protético' && styles.btnAtivo]}
          onPress={() => setTipo('Protético')}
        >
          <Text style={styles.btnText}>Protético</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btnTipo, tipo === 'Dentista' && styles.btnAtivo]}
          onPress={() => setTipo('Dentista')}
        >
          <Text style={styles.btnText}>Dentista</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnSalvar} onPress={salvarPerfil}>
        <Text style={styles.btnSalvarText}>Finalizar Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#2c3e50' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 10, marginBottom: 15 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  btnTipo: { flex: 1, padding: 10, borderWidth: 1, borderColor: '#3498db', alignItems: 'center', marginHorizontal: 5, borderRadius: 5 },
  btnAtivo: { backgroundColor: '#3498db' },
  btnText: { fontWeight: 'bold' },
  btnSalvar: { backgroundColor: '#2ecc71', padding: 15, borderRadius: 10, alignItems: 'center' },
  btnSalvarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});
