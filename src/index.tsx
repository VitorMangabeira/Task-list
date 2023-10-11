import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function Lista() {
  const [itens, setItens] = useState<string[]>([]);
  const [novoItem, setNovoItem] = useState<string>('');

  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      setItens([...itens, novoItem]);
      setNovoItem('');
    }
  };

  const limparLista = () => {
    setItens([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista:</Text>
      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.item}>{`${index + 1}. ${item}`}</Text>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite um novo item"
          value={novoItem}
          onChangeText={(text) => setNovoItem(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Adicionar" onPress={adicionarItem} color="green" />
          <View style={{ marginLeft: 8 }}>
            <Button title="Limpar" onPress={limparLista} color="red" />
          </View>
        </View>
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
    color: 'red',
  },
  item: {
    fontSize: 18,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    backgroundColor: 'lightgray',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
