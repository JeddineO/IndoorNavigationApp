import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const steps = [
  { label: 'Enregistrement', info: 'Effectuez votre enregistrement au comptoir ou en ligne.' },
  { label: 'Contrôle de sécurité', info: 'Passez les contrôles de sécurité avec vos documents.' },
  { label: 'Douane', info: 'Si nécessaire, passez par la douane pour vérification.' },
  { label: 'Embarquement', info: 'Rendez-vous à votre porte d\'embarquement pour monter à bord.' },
  { label: 'Vol', info: 'Profitez de votre vol.' }
];

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#11A8F8',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#11A8F8',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#11A8F8',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#11A8F8',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#11A8F8',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#11A8F8'
};

const FirstPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={0}
        labels={steps.map(step => step.label)}
        stepCount={steps.length}
      />
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Text style={styles.stepLabel}>{step.label}</Text>
          <Text style={styles.stepInfo}>{step.info}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  stepContainer: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#11A8F8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2
  },
  stepLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8
  },
  stepInfo: {
    fontSize: 14,
    color: '#fff'
  }
});

export default FirstPage;
