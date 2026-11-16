import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { FEATURE_OWNERS } from '@/shared/config/team';
import { colors } from '@/shared/theme/colors';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>FOURCAST</Text>
        <Text style={styles.title}>Weather at a glance</Text>
        <Text style={styles.subtitle}>
          Current conditions, five-day forecast, humidity, wind, and city search.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Development areas</Text>
      {FEATURE_OWNERS.map((feature) => (
        <View key={feature.branch} style={styles.card}>
          <Text style={styles.cardTitle}>{feature.area}</Text>
          <Text style={styles.cardOwner}>{feature.owner}</Text>
          <Text style={styles.cardText}>{feature.summary}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexGrow: 1,
    gap: 12,
    padding: 20,
  },
  hero: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    gap: 8,
    marginBottom: 12,
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
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    gap: 4,
    padding: 16,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
  },
  cardOwner: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  cardText: {
    color: colors.textMuted,
    lineHeight: 20,
  },
});
