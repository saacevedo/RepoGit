// scrrens/AddContactScreen.jsx


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

export default function AddContactScreen({ navigation, route }) {
  const { addContact } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // const handleSave = () => {
  //   if (name.trim() && phone.trim()) {
  //     const newContact = {
  //       id: Date.now(),
  //       name: name.trim(),
  //       phone: phone.trim(),
  //     };
  //     addContact(newContact);
  //     navigation.goBack();
  //   }
  // };

    const handleSave = () => {
      if (!name.trim()) {
        Alert.alert('Error', 'Falta contacto');
        return;
      }
      if(!phone.trim()) {
        Alert.alert('Error', 'Falta telefono');
        return;
      }
      const phoneRed = /^[0-9]{7,}$/;
    if (!phoneRegex.test(phone.trim())) {
      Alert.alert('Error', 'Telefono invalido, mínimo 7).');
      return;
    }
    const newContac = {
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim(),
    }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Agregar nuevo contacto:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Escribe el nombre aqui"
      />

      <Text style={styles.label}>Agregar telefono:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Escribe el telefono"
        keyboardType="phone-pad"
      />
        <Button title="Guardar contacto" onPress={handleSave} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 5,
  },

});