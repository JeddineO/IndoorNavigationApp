import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

const FlightInfoPage = () => {
  const [departureTime, setDepartureTime] = useState(new Date('2024-05-22T23:00:00')); // Exemple : Départ à midi le 22 mai 2024
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = departureTime.getTime() - now.getTime();

    if (difference <= 0) {
      return 'Départ imminent';
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  function showAlert() {
    Alert.alert(
      'Nouvelles informations sur le vol',
      'Le vol a été retardé de 30 minutes en raison de conditions météorologiques.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informations sur le Vol</Text>
      <View style={styles.card}>
        <Text style={styles.infoTitle}>Destination:</Text>
        <Text style={styles.infoContent}>Paris, France</Text>
        <Text style={styles.infoTitle}>Heure de Départ:</Text>
        <Text style={styles.infoContent}>{departureTime.toLocaleTimeString()}</Text>
        <Text style={styles.infoTitle}>Temps Restant:</Text>
        <Text style={styles.infoContent}>{timeRemaining}</Text>
      </View>
      <View style={styles.alert}>
        <Text style={styles.alertText}>Alertes</Text>
        <Text style={styles.alertContent}>Aucune alerte pour le moment.</Text>
        {/* Supposons que showAlert est appelé pour afficher l'alerte */}
        {/* <TouchableOpacity onPress={showAlert}>
          <Text style={styles.alertButton}>Voir l'alerte</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%'
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  infoContent: {
    fontSize: 16
  },
  alert: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    width: '100%'
  },
  alertText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  alertContent: {
    fontSize: 16
  },
  alertButton: {
    color: '#11A8F8',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10
  }
});

export default FlightInfoPage;
