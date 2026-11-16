import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/theme/colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>FOURCAST</Text>
        <Text style={styles.title}>SkyCast</Text>
        <Text style={styles.subtitle}>
          Search for a city to see current conditions and the five-day forecast.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  hero: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    gap: 8,
    padding: 24,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: colors.onPrimary,
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.onPrimaryMuted,
    fontSize: 16,
    lineHeight: 24,
  },
});
