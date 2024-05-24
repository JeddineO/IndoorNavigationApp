import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const destinations = [
  { id: '1', name: 'Porte d\'Embarquement A1' },
  { id: '2', name: 'Porte d\'Embarquement B2' },
  { id: '3', name: 'Porte d\'Embarquement C3' },
  { id: '4', name: 'Zone de Récupération de Bagages' },
  { id: '5', name: 'Contrôle de Sécurité' },
  { id: '6', name: 'Salon VIP' },
  { id: '7', name: 'Magasin Duty-Free' },
  { id: '8', name: 'Restaurant' },
];

const FindPathPage = ({ navigation }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
    // Naviguer vers la page de détails du chemin avec la destination sélectionnée
    navigation.navigate('PathDetails', { destination });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez votre destination</Text>
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.destinationItem}
            onPress={() => handleDestinationSelect(item)}
          >
            <Text style={styles.destinationText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#11A8F8',
    marginBottom: 20,
    textAlign: 'center',
  },
  destinationItem: {
    padding: 15,
    backgroundColor: '#11A8F8',
    borderRadius: 10,
    marginBottom: 10,
  },
  destinationText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default FindPathPage;
