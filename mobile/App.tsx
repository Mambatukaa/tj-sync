import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <View className="px-5 py-4 bg-blue-600 rounded-xl">
        <Text className="text-white text-xl font-bold">TJ-Sync Ready 🚀</Text>
      </View>
    </SafeAreaView>
  );
}
