import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  progress: number; // 0 to 1
  height?: number;
  backgroundColor?: string;
  fillColor?: string;
  borderRadius?: number;
}

const CustomProgressBar: React.FC<Props> = ({
  progress,
  height = 10,
  backgroundColor = '#e0e0e0',
  fillColor = '#007bff',
  borderRadius = 8,
}) => {
  return (
    <View style={[styles.container, { height, backgroundColor, borderRadius }]}>
      <View
        style={{
          width: `${Math.min(progress * 100, 100)}%`,
          height: '100%',
          backgroundColor: fillColor,
          borderRadius,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
});

export default CustomProgressBar;
