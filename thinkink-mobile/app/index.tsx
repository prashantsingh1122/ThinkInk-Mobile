import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { useRouter } from 'expo-router';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Feather,
  Ionicons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';

const features = [
  {
    icon: <MaterialCommunityIcons name="pen" size={32} color="#6366f1" />,
    title: "Create & Publish Posts",
    description: "Express yourself with our powerful editor. Format your content, add media, and publish instantly."
  },
  {
    icon: <Feather name="upload-cloud" size={32} color="#6366f1" />,
    title: "Seamless Image Uploads",
    description: "Enhance your posts with high-quality images. Fast, reliable, and secure hosting."
  },
  {
    icon: <FontAwesome5 name="user-shield" size={32} color="#6366f1" />,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with industry-standard authentication and encryption."
  },
  {
    icon: <AntDesign name="heart" size={32} color="#6366f1" />,
    title: "Interactive Like System",
    description: "Build engagement with our intuitive like system and track your popular content."
  },
  {
    icon: <FontAwesome5 name="comments" size={32} color="#6366f1" />,
    title: "Rich Commenting System",
    description: "Foster discussions with threaded comments and mentions."
  },
  {
    icon: <FontAwesome name="bookmark" size={32} color="#6366f1" />,
    title: "Smart Bookmarking",
    description: "Save posts to your collection, organize with tags, and access anytime."
  },
  {
    icon: <Feather name="search" size={32} color="#6366f1" />,
    title: "Advanced Search",
    description: "Find exactly what you need with powerful search and filters."
  },
  {
    icon: <Ionicons name="hardware-chip" size={32} color="#6366f1" />,
    title: "AI-Powered Assistance",
    description: "Enhance your writing with AI summaries, outlines, and suggestions."
  },
  {
    icon: <Entypo name="edit" size={32} color="#6366f1" />,
    title: "Comprehensive Post Management",
    description: "Edit, update, or remove your posts and track engagement."
  },
  {
    icon: <FontAwesome5 name="user-circle" size={32} color="#6366f1" />,
    title: "Personalized Dashboard",
    description: "Monitor your posts, engagement, and manage comments in one place."
  }
];

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>ThinkInk</Text>
        <Text style={styles.heroSubtitle}>
          Welcome to ThinkInk, where your ideas come to life. Share your stories, connect with others, and build your digital presence with our suite of blogging tools.
        </Text>
        <View style={styles.heroButtons}>
          <Button
            mode="contained"
            onPress={() => router.push('/register')}
            style={styles.heroButton}
            labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
            buttonColor="#6366f1"
          >
            Start Writing Now
          </Button>
          <Button
            mode="outlined"
            onPress={() => router.push('/login')}
            style={styles.heroButton}
            labelStyle={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}
            textColor="#fff"
          >
            Sign In
          </Button>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.featuresTitle}>Everything You Need to Succeed</Text>
        <Text style={styles.featuresSubtitle}>
          ThinkInk provides a comprehensive suite of features designed to elevate your blogging experience.
        </Text>
        <View style={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <Card key={idx} style={styles.featureCard}>
              <View style={styles.featureIcon}>{feature.icon}</View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </Card>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Begin Your Writing Journey Today</Text>
        <Text style={styles.ctaSubtitle}>
          Join our growing community of writers and content creators. With ThinkInk, your voice matters.
        </Text>
        <Button
          mode="contained"
          onPress={() => router.push('/register')}
          style={styles.ctaButton}
          labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
          buttonColor="#6366f1"
        >
          Create Your Account
        </Button>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Ionicons name="rocket" size={24} color="#6366f1" />
          <Text style={styles.footerBrand}>ThinkInk</Text>
        </View>
        <Text style={styles.footerText}>© 2024 ThinkInk. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 16,
    backgroundColor: "#18181b",
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'transparent',
    backgroundClip: 'text',
    backgroundColor: '#6366f1',
    textShadowColor: '#6366f1',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
    marginBottom: 12,
  },
  heroSubtitle: {
    color: "#d1d5db",
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    marginHorizontal: 8,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    marginTop: 8,
  },
  heroButton: {
    marginHorizontal: 8,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  featuresSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#18181b",
  },
  featuresTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#fff",
    textAlign: 'center',
    marginBottom: 8,
  },
  featuresSubtitle: {
    color: "#d1d5db",
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  featureCard: {
    width: '45%',
    minWidth: 160,
    margin: 8,
    backgroundColor: "#27272a",
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
  },
  featureIcon: {
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#6366f1",
    marginBottom: 4,
    textAlign: 'center',
  },
  featureDescription: {
    color: "#d1d5db",
    fontSize: 14,
    textAlign: 'center',
  },
  ctaSection: {
    backgroundColor: "#27272a",
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 24,
    borderRadius: 24,
    marginHorizontal: 8,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#fff",
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaSubtitle: {
    color: "#d1d5db",
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaButton: {
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: "#18181b",
    borderTopWidth: 1,
    borderTopColor: "#27272a",
    marginTop: 32,
  },
  footerBrand: {
    color: "#6366f1",
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 8,
  },
  footerText: {
    color: "#a1a1aa",
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});