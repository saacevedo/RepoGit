// screens/ListScreenn.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';

export default function ListScreen({ navigation }) {
   

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Armando Gonzales', phone: '3005946958' },
    { id: 2, name: 'Miranda Arteaga', phone: '3018545878' }, 
  ]);

  // Funcion para añadir un nuevo contacto
  const addContact = (contact) => {
    setContacts(prev => [...prev, contact]);
  };

  return (
    <View style={styles.container}>
        
   <Text style={styles.heading}>Mis Contactos</Text>
    <ScrollView style={styles.list}>
      {contacts.map(contact => (
        <View key={contact.id} style={styles.contactRow}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactPhone}>{contact.phone}</Text>
        </View>
      ))}
    </ScrollView>

    {/*Boton para crear nuevo contacto */}
    <Button
    title='Crear contacto'
    onPress={() => navigation.navigate('AddContact', { addContact })}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:      { flex: 1, padding: 16, backgroundColor: '#1C1C1C' },
  heading:        { fontSize: 20, fontWeight: 'bold', marginBottom: 10, marginTop: 20, color: '#666' },
  filterRow:      { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  list:           { flex: 1, marginBottom: 12 },
  taskRow:        { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  icon:           { fontSize: 18, marginRight: 8 },
  taskText:       { fontSize: 16 },
  completedText:  { textDecorationLine: 'line-through', color: '#888' },
  pendingText:    { color: '#000' },
  divider:        { height: 1, backgroundColor: '#ccc', marginVertical: 20 },
  contactRow:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  contactName:    { fontSize: 16, fontWeight: 'bold', color: '#666' },
  contactPhone:   { fontSize: 14, color: '#666' },
});
