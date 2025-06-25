import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      
      
    >
      <Text
        style={{ fontSize: 40, color: "brown" }}>Welcome To ThinkInk Mobile</Text>
      <Link
        href="/login"
        style={{
          fontSize: 20,
          color: "black",
          marginTop: 20,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
          textAlign: "center",
          width: 200,
          backgroundColor: "lightgray",
          textDecorationLine: "none",
          fontWeight: "bold",
          textTransform: "uppercase",
          shadowColor: "#000",
          fontFamily: "Arial",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        Login here
      </Link>
    </View>
  );
}


