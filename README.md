# react-native-credit-card-display

Credit Card Component for React Native -- Display Only. At the moment, it only supports Android and iOS, since `react-native-flip-card` only supports those two platforms.

## Installation

```sh
npm install react-native-credit-card-display
```

or

```sh
yarn add react-native-credit-card-display
```

## Usage

```js
import CreditCardDisplay from 'react-native-credit-card-display';

// ...

return (
  <CreditCardDisplay
    number={4242424242424242}
    cvc={123}
    expiration="04/21"
    name="John J. Doe"
    since="2004"
  />
);
```

## Props

| Prop         | Description                                                               | Default Value     | Required | Notes                                                                                                         |
| ------------ | ------------------------------------------------------------------------- | ----------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| number       | Number to display on the front of the card                                | `undefined`       | Yes      | can be a number or a string.                                                                                  |
| name         | Name to display on the front of the card                                  | `undefined`       | Yes      |                                                                                                               |
| expiration   | Expiration Date to display on the front of the card                       | `undefined`       | Yes      | if passed a number (e.g. 0621), it will be formatted, otherwise displayed as given.                           |
| cvc          | CVC to display on the back of the card                                    | `undefined`       | Yes      | can be a number or a string.                                                                                  |
| since        | Year for `Customer Since`                                                 | `undefined`       | no       | can be a number or a string.                                                                                  |
| flipped      | Is the card flipped?                                                      | `false`           | no       | Use this to programmatically toggle the card.                                                                 |
| friction     | Friction for the card flip                                                | `6`               | no       | I couldn't figure out what this does, but I'm just passing it to `react-native-flip-card` if anyone wants it. |
| fontSize     | Base font size to use                                                     | `20`              | no       | will scale all displayed text                                                                                 |
| fontColor    | Color to use for the numbers and letters                                  | `#FFFFFF`         | no       |                                                                                                               |
| height       | Height for card                                                           | `190`             | no       |                                                                                                               |
| width        | Width for card                                                            | `300`             | no       |                                                                                                               |
| cardStyles   | Additional styles to apply to the component from `react-native-flip-card` | `{}`              | no       |                                                                                                               |
| frontStyles  | Additional styles to apply to the front of the card                       | `{}`              | no       |                                                                                                               |
| backStyles   | Additional styles to apply to the back of the card                        | `{}`              | no       |                                                                                                               |
| frontImage   | Alternate image to use for the front of the card                          | purple card image | no       |                                                                                                               |
| backImage    | Alternate image to use for the back of the card                           | purple card image | no       |                                                                                                               |
| borderRadius | Border Radius to use on the images                                        | 20                | no       |                                                                                                               |

**Note**: `flipped` only toggles the flip, not sets it absolutely (this is a limitation of the library used, `react-native-flip-card`).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
