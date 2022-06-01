import * as React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import CreditCardDisplay from 'react-native-credit-card-display';

export default function App() {
  const [card2Toggle, setCard2Toggle] = React.useState(true);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{ alignContent: 'center' }}
        style={{
          width: Dimensions.get('screen').width,
        }}
      >
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4242424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
            since={2004}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={'3088 0000 0000 0009'}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
            since={2004}
            height={126}
            width={200}
            fontSize={12}
            friction={10}
            flipped={card2Toggle}
          />
          <Button onPress={() => setCard2Toggle(!card2Toggle)} title="Toggle" />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={4026424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={'3400 0000 0000 009'}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
            borderRadius={50}
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={5018424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
            fontColor="rgba(255, 192, 203, 0.25)"
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={5223424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={6042424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={6242424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={3542424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={3542424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
            fontColor="#222"
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={3542424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
            fontColor="#222"
            frontImage={{
              uri: 'https://p.kindpng.com/picc/s/252-2524416_credit-card-hd-png-download.png',
            }}
            // You can do the same thing with backImage,
            // just I didn't see any blank card images to use at the time
          />
        </View>
        <View style={styles.cardContainer}>
          <CreditCardDisplay
            number={6242424242424242}
            cvc={123}
            expiration="06/21"
            name="John J. Doe"
            fontColor="#222"
            frontImage={require('./assets/images/blankCard.png')}
            // You can do the same thing with backImage,
            // just I didn't see any blank card images to use at the time
          />
        </View>
      </ScrollView>
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
    marginVertical: 25,
    alignItems: 'center',
  },
});
