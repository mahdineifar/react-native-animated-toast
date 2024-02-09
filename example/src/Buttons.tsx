import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useToast } from 'react-native-toast-animated';

export const Buttons = () => {
  const toast = useToast();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          toast.show({
            type: 'success',
            text: 'This is a success toast',
            title: 'Success',
          })
        }
        style={styles.button}
      >
        <Text style={styles.text}>Success Toast</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          toast.show({
            type: 'info',
            text: 'This is an info toast - This is an info toast - This is an info toast',
            title: 'Info',
          })
        }
        style={styles.button}
      >
        <Text style={styles.text}>Info Toast</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          toast.show({ type: 'warning', text: 'This is a warning toast' })
        }
        style={styles.button}
      >
        <Text style={styles.text}>Warning Toast</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          toast.show({ type: 'error', text: 'This is an error toast' })
        }
        style={styles.button}
      >
        <Text style={styles.text}>Error Toast</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: '#1c1c1c',
    padding: 20,
    width: 200,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
