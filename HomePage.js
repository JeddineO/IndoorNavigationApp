import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const HomePage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // Navigation vers la page suivante après le scan
    navigation.navigate('Main');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/onda.jpg')} style={styles.logo} />
        <Text style={styles.title}>Bienvenue à l'Aéroport Mohammed V</Text>
        <Text style={styles.subtitle}>Votre assistant de voyage numérique</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          Cette application vous aide à naviguer dans l'aéroport, à obtenir des informations de vol en temps réel, et à profiter des offres spéciales des magasins.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ScannerPage')}
        >
          <Text style={styles.buttonText}>Scanner la Carte d'Embarquement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#11A8F8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#11A8F8',
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#11A8F8',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#11A8F8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomePage;
