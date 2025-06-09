import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Color Drag/Drop',
              tabBarLabel: 'Color Drag/Drop',
              tabBarIcon: ({ color, size }) => (
                <Icon name="water" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="ReorderableList"
            options={{
              title: 'Reorderable List',
              tabBarLabel: 'Reorderable List',
              tabBarIcon: ({ color, size }) => (
                <Icon name="format-list-bulleted" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="KnightMoves"
            options={{
              title: 'Knight Moves',
              tabBarLabel: 'Knight Moves',
              tabBarIcon: ({ color, size }) => (
                <Icon name="chess-knight" color={color} size={size} />
              ),
            }}
          />
          <Tabs.Screen
            name="Scrolling"
            options={{
              title: 'Scrolling',
              tabBarLabel: 'Scrolling',
              tabBarIcon: ({ color, size }) => (
                <Icon name="arrow-left-right" color={color} size={size} />
              ),
            }}
          />
        </Tabs>
      </GestureHandlerRootView>
    </>
  );
}
