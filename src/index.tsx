import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import FlipCard from 'react-native-flip-card';
import creditcardutils from 'creditcardutils';

type Props = {
  number: number;
  name: string;
  cvc: number;
  expiration: string;
  since?: string;
  frontStyles?: object;
  backStyles?: object;
  cardStyles?: object;
  height?: number;
  width?: number;
} & typeof defaultProps;
const defaultProps = { height: 190, width: 300 };

const CreditCardDisplay = (props: Props) => {
  return (
    <View style={{ height: props.height, width: props.width }}>
      <FlipCard
        style={props.cardStyles}
        flipHorizontal={true}
        flipVertical={false}
      >
        <View style={props.frontStyles}>
          <View style={{ height: props.height, width: props.width }}>
            <ImageBackground
              source={require('./assets/images/card-front.png')}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 15 }}
            >
              <View style={styles.imageContainer}>
                <View style={{ height: '50%' }} />
                <Text style={styles.cardNumber}>
                  {creditcardutils.formatCardNumber(String(props.number))}
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
                        <Text>{props.since}</Text>
                      </>
                    )}
                  </View>
                  <View style={styles.groupContainer}>
                    <Text style={{ ...styles.groupLabel, textAlign: 'center' }}>
                      VALID{'\n'}THRU
                    </Text>
                    <Text>
                      {creditcardutils.formatCardExpiry(props.expiration)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.cardName}>{props.name}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={props.backStyles}>
          <View style={{ height: props.height, width: props.width }}>
            <ImageBackground
              source={require('./assets/images/card-back.png')}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 15 }}
            >
              <View style={{ height: '45%' }} />
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '82%' }} />
                <Text style={styles.cvcText}>{props.cvc}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </FlipCard>
    </View>
  );
};

export default CreditCardDisplay;

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  cardNumber: {
    fontSize: 20,
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
  imageContainer: {
    padding: 20,
  },
  cardName: {
    fontSize: 20,
    marginTop: 5,
  },
  cvcText: {
    // width: '80%',
    fontSize: 20,
    alignSelf: 'center',
  },
});

CreditCardDisplay.defaultProps = defaultProps;
