import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, ActivityIndicator } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Register() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    setError('');
    if (!Name || !Email || !Password || !ConfirmPassword) {
      setError('Please fill all fields');
      return;
    }
    if (Password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    if (Password !== ConfirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // On success, navigate to login or dashboard
      router.push('/login');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Home Link */}
      <TouchableOpacity
        style={styles.homeLink}
        onPress={() => router.push('/')}
        activeOpacity={0.7}
      >
        <Text style={styles.homeLinkText}>🏠 ThinkInk</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>
        {Error ? <Text style={styles.error}>{Error}</Text> : null}
        <TextInput
          label="Name"
          placeholder="Enter your name"
          autoCapitalize="words"
          mode="flat"
          value={Name}
          onChangeText={setName}
          style={styles.input}
          textColor="black"
          underlineColor="#a78bfa"
          activeUnderlineColor="#a78bfa"
          theme={{ colors: { placeholder: '#a1a1aa' } }}
        />
        <TextInput
          label="Email"
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
          mode="flat"
          value={Email}
          onChangeText={setEmail}
          style={styles.input}
          textColor="black"
          underlineColor="#a78bfa"
          activeUnderlineColor="#a78bfa"
          theme={{ colors: { placeholder: '#a1a1aa' } }}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          mode="flat"
          value={Password}
          onChangeText={setPassword}
          style={styles.input}
          textColor="black"
          underlineColor="#a78bfa"
          activeUnderlineColor="#a78bfa"
          theme={{ colors: { placeholder: '#a1a1aa' } }}
        />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm Password"
          autoCapitalize="none"
          secureTextEntry
          mode="flat"
          value={ConfirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          textColor="black"
          underlineColor="#a78bfa"
          activeUnderlineColor="#a78bfa"
          theme={{ colors: { placeholder: '#a1a1aa' } }}
        />
        <Button
          mode="contained"
          onPress={handleRegister}
          style={styles.button}
          contentStyle={{ paddingVertical: 8 }}
          buttonColor="#a78bfa"
          disabled={isLoading}
        >
          {isLoading ? <ActivityIndicator color="#fff" /> : "Sign Up"}
        </Button>
        <Text style={styles.signupText}>
          Already have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => router.push('/login')}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18181b",
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeLink: {
    position: 'absolute',
    top: 48,
    left: 24,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeLinkText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  formContainer: {
    width: '90%',
    maxWidth: 800,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    padding: 24,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 1,
  },
  error: {
    color: "#f87171",
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 10,
    
  },
  button: {
    borderRadius: 24,
    marginBottom: 16,
  },
  signupText: {
    color: "#a1a1aa",
    textAlign: 'center',
    fontSize: 14,
  },
  signupLink: {
    color: "#a78bfa",
    fontWeight: 'bold',
  },
});