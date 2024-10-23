'use client'
import { Text, View } from 'react-native'
import Link from './custom_link'

export default async function Home() {
  console.log("rerender home")
  await new Promise(resolve => setTimeout(resolve, 500))
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Link href="/test">
        <Text>Hello, Next.js App Router.</Text>
      </Link>
    </View>
  )
}
