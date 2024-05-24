import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PathDetailsPage = ({ route }) => {
  const { destination } = route.params;

  const handleARGuide = () => {
    // Naviguer vers le guide en réalité augmentée pour cette destination
    console.log("Guide en réalité augmentée pour", destination.name);
  };

  const handle3DGuide = () => {
    // Naviguer vers le guide en 3D pour cette destination
    console.log("Guide en 3D pour", destination.name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails du Chemin</Text>
      <Text style={styles.subtitle}>Destination :</Text>
      <Text style={styles.destination}>{destination.name}</Text>
      <View style={styles.pathDetails}>
        <Text style={styles.pathText}>Instructions pour atteindre {destination.name} :</Text>
        <Text style={styles.pathText}>1. Sortez de la zone de sécurité.</Text>
        <Text style={styles.pathText}>2. Tournez à gauche et suivez les panneaux pour {destination.name}.</Text>
        <Text style={styles.pathText}>3. Continuez tout droit pendant 200 mètres.</Text>
        <Text style={styles.pathText}>4. {destination.name} sera sur votre droite.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleARGuide}
        >
          <Text style={styles.buttonText}>Guide AR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handle3DGuide}
        >
          <Text style={styles.buttonText}>Guide 3D</Text>
        </TouchableOpacity>
      </View>
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
  subtitle: {
    fontSize: 18,
    color: '#11A8F8',
    marginBottom: 10,
    textAlign: 'center',
  },
  destination: {
    fontSize: 20,
    color: '#11A8F8',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pathDetails: {
    marginTop: 20,
  },
  pathText: {
    fontSize: 16,
    color: '#11A8F8',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#11A8F8',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PathDetailsPage;
