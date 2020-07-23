import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import CreditCardDisplay from 'react-native-credit-card-display';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.cardContainer}>
        <CreditCardDisplay
          number={4242424242424242}
          cvc={123}
          expiration="06/21"
          name="John J. Doe"
        />
      </View>
      <View style={styles.cardContainer}>
        <CreditCardDisplay
          number={4242424242424242}
          cvc={123}
          expiration="06/21"
          name="John J. Doe"
          since="2004"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    marginVertical: 50,
  },
});
