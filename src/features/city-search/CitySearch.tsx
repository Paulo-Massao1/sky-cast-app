import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import { searchCities } from './citySearchApi';
import type { City } from './types';
import type { Coordinates } from '../../shared/types/weather';

interface CitySearchProps {
  onCitySelect: (coordinates: Coordinates) => void;
}

export default function CitySearch({
  onCitySelect,
}: CitySearchProps) {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) {
      setCities([]);
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setCities([]);

    try {
      const results = await searchCities(query.trim());
      setCities(results);

      if (results.length === 0) {
        setError('No cities found.');
      }
    } catch {
      setError('Unable to search. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (city: City) => {
    const coordinates: Coordinates = {
      latitude: city.lat,
      longitude: city.lon,
    };

    setQuery(city.name);
    setCities([]);
    setError('');

    onCitySelect(coordinates);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for a City</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        autoCapitalize="words"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" />}

      {!!error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={cities}
        keyExtractor={(item) =>
          `${item.name}-${item.lat}-${item.lon}`
        }
        keyboardShouldPersistTaps="handled"
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.result}
            onPress={() => handleSelect(item)}
          >
            <Text>
              {item.name}
              {item.state ? `, ${item.state}` : ''}
              {`, ${item.country}`}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  result: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});