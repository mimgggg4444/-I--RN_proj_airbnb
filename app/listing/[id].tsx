import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useGlobalSearchParams } from 'expo-router'

const Page = () => {
    // string, String 차이? id의 타입 지정 의문
const{id} = useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Page</Text>
    </View>
  )
}

export default Page