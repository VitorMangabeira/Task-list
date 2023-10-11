import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function listaDeTarefas() {
  const [tarefas, setTarefas] = useState<{ texto: string; concluida: boolean }[]>(
    []
  );
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  const marcarConcluida = (index: number) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const excluirTarefa = (index: number) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de tarefas</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.tarefa}>
            <Text
              style={{
                ...styles.textoTarefa,
                textDecorationLine: item.concluida ? 'line-through' : 'none',
              }}
            >
              {item.texto}
            </Text>
            <Button
              title={item.concluida ? 'Desfazer' : 'Concluir'}
              onPress={() => marcarConcluida(index)}
              color={item.concluida ? 'orange' : 'green'} 
            />
            <Button
              title="Excluir"
              onPress={() => excluirTarefa(index)}
              color="red"
            />
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChangeText={(text) => setNovaTarefa(text)}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  tarefa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textoTarefa: {
    flex: 1,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
  },
});
