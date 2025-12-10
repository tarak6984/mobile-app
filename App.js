import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PlusIcon from './PlusIcon';
import DownArrow from './DownArrow';

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState('Anguilla');
  const [shippingMethod, setShippingMethod] = useState('Ocean');
  const [shipmentName, setShipmentName] = useState('Cyber Monday Items');
  const [description, setDescription] = useState('Electronics');

  const destinations = [
    { name: 'Anguilla', flag: '🇦🇮' },
    { name: 'Dominica', flag: '🇩🇲' },
    { name: 'St. Lucia', flag: '🇱🇨' },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New shipment</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Step 1: Enter shipment details */}
        <View style={styles.section}>
          <View style={styles.stepHeader}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <Text style={styles.stepTitle}>Enter shipment details</Text>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabelInside}>NAME YOUR SHIPMENT</Text>
              <TextInput
                style={styles.inputWithLabel}
                value={shipmentName}
                onChangeText={setShipmentName}
                placeholder=""
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabelInside}>SHIPMENT DESCRIPTION</Text>
              <TextInput
                style={styles.inputWithLabel}
                value={description}
                onChangeText={setDescription}
                placeholder=""
              />
            </View>
          </View>
        </View>

        {/* Step 2: Where is this shipment going? */}
        <View style={styles.section}>
          <View style={styles.stepHeader}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <Text style={styles.stepTitle}>Where is this shipment going?</Text>
          </View>

          {/* Single Card with Light Blue Background */}
          <View style={styles.shipsmartCard}>
            {/* Ship with Shipsmart Header */}
            <View style={styles.shipsmartHeader}>
              <Image 
                source={require('./assets/ship_with_ship_mart.png')} 
                style={styles.shipsmartLogo}
                resizeMode="contain"
              />
              <View style={styles.shipsmartText}>
                <Text style={styles.shipsmartTitle}>Ship with Shipsmart</Text>
                <Text style={styles.shipsmartSubtitle}>SHIP DIRECTLY TO YOUR ISLAND</Text>
              </View>
            </View>

            {/* Divider Line */}
            <View style={styles.divider} />

            {/* Select a destination */}
            <Text style={styles.sectionLabel}>Select a destination</Text>
            <View style={styles.radioGroup}>
              {destinations.map((dest) => (
                <TouchableOpacity
                  key={dest.name}
                  style={styles.radioOption}
                  onPress={() => setSelectedDestination(dest.name)}
                >
                  <View style={[
                    styles.radioButton,
                    selectedDestination === dest.name && styles.radioButtonChecked
                  ]}>
                    {selectedDestination === dest.name && (
                      <Text style={styles.checkmark}>✓</Text>
                    )}
                  </View>
                  <Text style={styles.radioLabel}>{dest.name}</Text>
                  <Text style={styles.flag}>{dest.flag}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* How do you want to ship? */}
            <Text style={styles.sectionLabel}>How do you want to ship?</Text>
            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setShippingMethod('Ocean')}
              >
                <View style={[
                  styles.radioButton,
                  shippingMethod === 'Ocean' && styles.radioButtonChecked
                ]}>
                  {shippingMethod === 'Ocean' && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={styles.radioLabel}>Via Ocean</Text>
                <View style={styles.iconWrapper}>
                  <Text style={styles.iconText}>🚢</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setShippingMethod('Air')}
              >
                <View style={[
                  styles.radioButton,
                  shippingMethod === 'Air' && styles.radioButtonChecked
                ]}>
                  {shippingMethod === 'Air' && (
                    <Text style={styles.checkmark}>✓</Text>
                  )}
                </View>
                <Text style={styles.radioLabel}>Via Air</Text>
                <View style={styles.iconWrapper}>
                  <Text style={styles.iconText}>✈️</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Step 3: Select delivery address */}
        <View style={styles.section}>
          <View style={styles.stepHeader}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepTitle}>Select delivery address</Text>
          </View>

          <TouchableOpacity style={styles.addressDropdown}>
            <View>
              <Text style={styles.addressTitle}>My addresses</Text>
              <Text style={styles.addressSubtitle}>Tap to select an address</Text>
            </View>
            <DownArrow size={16} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.addAddressButton}>
            <PlusIcon size={20} color="#0066ff" />
            <Text style={styles.addAddressText}>ADD NEW ADDRESS</Text>
          </TouchableOpacity>
        </View>

        {/* Save shipment button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save shipment</Text>
          <Text style={styles.saveButtonIcon}>›</Text>
        </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: 16,
    color: '#ef4444',
    fontWeight: '400',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e8f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0066ff',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    flex: 1,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputWrapper: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 14,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  inputLabelInside: {
    fontSize: 10,
    fontWeight: '600',
    color: '#999',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  inputWithLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    padding: 0,
    margin: 0,
  },
  shipsmartCard: {
    backgroundColor: '#e8f2ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  shipsmartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  shipsmartLogo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  shipsmartText: {
    flex: 1,
  },
  shipsmartTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginBottom: 2,
  },
  shipsmartSubtitle: {
    fontSize: 11,
    fontWeight: '500',
    color: '#6b7280',
    letterSpacing: 0.3,
  },
  divider: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    marginTop: 4,
  },
  radioGroup: {
    gap: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#fff',
  },
  radioButtonChecked: {
    borderColor: '#0066ff',
    backgroundColor: '#0066ff',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    flex: 1,
  },
  flag: {
    fontSize: 24,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  iconText: {
    fontSize: 16,
  },
  addressDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    marginBottom: 16,
  },
  addressTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  addressSubtitle: {
    fontSize: 13,
    color: '#6b7280',
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addAddressText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0066ff',
    letterSpacing: 0.3,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066ff',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginVertical: 24,
    gap: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  saveButtonIcon: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '400',
  },
});
