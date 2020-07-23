import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import FlipCard from 'react-native-flip-card';
import creditcardutils from 'creditcardutils';

type Props = {
  number: number;
  since?: string;
  name: string;
  cvc: number;
  expiration: string;
  frontStyles?: object;
  backStyles?: object;
  cardStyles?: object;
} & typeof defaultProps;
const defaultProps = { height: 150, width: 300 };

const CreditCardDisplay = (props: Props) => {
  return (
    <View style={styles.container}>
      <FlipCard
        style={{
          ...styles.card,
          ...props.cardStyles,
        }}
        flipHorizontal={true}
        flipVertical={false}
      >
        <View
          style={{
            ...styles.cardSide,
            ...styles.cardFront,
            ...props.frontStyles,
          }}
        >
          <View
            style={{
              ...styles.cardContent,
            }}
          >
            <ImageBackground
              source={require('./assets/images/card-front.png')}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 15 }}
            >
              <View style={styles.imageContainer}>
                <View style={{ height: '60%' }} />
                <Text style={styles.cardNumber}>
                  {creditcardutils
                    .formatCardNumber(String(props.number))
                    .replace(/ /g, ' · ')}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.groupContainer}>
                    {props.since && (
                      <>
                        <Text
                          style={{ ...styles.groupLabel, textAlign: 'right' }}
                        >
                          CUSTOMER{'\n'}SINCE
                        </Text>
                        <Text style={styles.groupText}>{props.since}</Text>
                      </>
                    )}
                  </View>
                  <View style={styles.groupContainer}>
                    <Text style={{ ...styles.groupLabel, textAlign: 'center' }}>
                      GOOD{'\n'}THRU
                    </Text>
                    <Text style={styles.groupText}>
                      {creditcardutils.formatCardExpiry(props.expiration)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.cardName}>{props.name}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            ...styles.cardSide,
            ...styles.cardBack,
            ...props.backStyles,
          }}
        >
          <View
            style={{
              ...styles.cardContent,
            }}
          >
            <ImageBackground
              source={require('./assets/images/card-back.png')}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 15 }}
            >
              <Text>back</Text>
            </ImageBackground>
          </View>
        </View>
      </FlipCard>
    </View>
  );
};

export default CreditCardDisplay;

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: 300,
  },
  card: {},
  cardContent: {
    height: 190,
    width: 300,
  },
  cardSide: {},
  cardFront: {},
  cardBack: {},
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  cardNumber: {
    // width: '80%',
    fontSize: 24,
    alignSelf: 'center',
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    marginRight: '2%',
  },
  groupLabel: {
    color: '#222',
    // textAlign: 'right',
    textAlignVertical: 'center',
    marginRight: '2%',
    fontSize: 10,
  },
  groupText: {
    //
  },
  imageContainer: {
    padding: 20,
  },
  cardName: {
    fontSize: 20,
  },
});
