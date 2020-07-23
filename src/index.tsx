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
  fontSize?: number;
} & typeof defaultProps;
const defaultProps = { height: 190, width: 300, fontSize: 20 };

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
                <Text
                  style={{
                    fontSize: props.fontSize,
                    alignSelf: 'center',
                    color: '#222',
                  }}
                >
                  {creditcardutils.formatCardNumber(String(props.number))}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.groupContainer}>
                    {props.since && (
                      <>
                        <Text
                          style={{
                            ...styles.groupLabel,
                            fontSize: props.fontSize * 0.7,
                            textAlign: 'right',
                          }}
                        >
                          CUSTOMER{'\n'}SINCE
                        </Text>
                        <Text
                          style={{
                            fontSize: props.fontSize * 0.7,
                            color: '#222',
                          }}
                        >
                          {props.since}
                        </Text>
                      </>
                    )}
                  </View>
                  <View style={styles.groupContainer}>
                    {props.expiration && (
                      <>
                        <Text
                          style={{
                            ...styles.groupLabel,
                            fontSize: props.fontSize * 0.7,
                            textAlign: 'center',
                          }}
                        >
                          VALID{'\n'}THRU
                        </Text>
                        <Text
                          style={{
                            fontSize: props.fontSize * 0.7,
                            color: '#222',
                          }}
                        >
                          {creditcardutils.formatCardExpiry(props.expiration)}
                        </Text>
                      </>
                    )}
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: props.fontSize,
                    marginTop: 5,
                    color: '#222',
                  }}
                >
                  {props.name}
                </Text>
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
                <Text style={{ fontSize: props.fontSize, alignSelf: 'center' }}>
                  {props.cvc}
                </Text>
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
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    marginRight: '2%',
  },
  groupLabel: {
    color: '#333',
    textAlignVertical: 'center',
    marginRight: '2%',
  },
  imageContainer: {
    padding: 15,
  },
});

CreditCardDisplay.defaultProps = defaultProps;
