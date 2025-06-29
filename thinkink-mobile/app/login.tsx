import { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, TextInput, ActivityIndicator } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAuthentication = async () => {
    setError('');
    if (!Email || !Password) {
      setError('Please fill all fields');
      return;
    }
    if (Password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // On success, navigate to dashboard or home
      // router.push('/dashboard');
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

      {/* Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        {Error ? <Text style={styles.error}>{Error}</Text> : null}
        <TextInput
          label="Email"
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
          mode="flat"
          value={Email}
          onChangeText={setEmail}
          style={styles.input}
          textColor="#fff"
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
          textColor="#fff"
          underlineColor="#a78bfa"
          activeUnderlineColor="#a78bfa"
          theme={{ colors: { placeholder: '#a1a1aa' } }}
        />
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => router.push('/forgotpassword')}
        >
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
        <Button
          mode="contained"
          onPress={handleAuthentication}
          style={styles.button}
          contentStyle={{ paddingVertical: 8 }}
          buttonColor="#a78bfa"
          disabled={isLoading}
        >
          {isLoading ? <ActivityIndicator color="#fff" /> : "Sign In"}
        </Button>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            style={styles.signupLink}
            onPress={() => router.push('/register')}
          >
            Sign Up
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
    width: '100%',
    maxWidth: 400,
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
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotText: {
    color: "white",
    fontSize: 14,
  },
  button: {
    borderRadius: 30,
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