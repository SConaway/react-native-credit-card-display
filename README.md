# react-native-credit-card-display

Credit Card Component for React Native -- Display Only

## Installation

```sh
npm install react-native-credit-card-display
```

## Basic Example

```js
import CreditCardDisplay from "react-native-credit-card-display";

// ...

return (
  {/* ... */}
  <CreditCardDisplay
    number={4242424242424242}
    cvc={123}
    expiration="04/21"
    name="John J. Doe"
    since="2004"
  />
)
```

## Props

| Prop         | Description                                                               | Default Value | Required | Notes                                                                                                        |
| ------------ | ------------------------------------------------------------------------- | ------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| number       | Number to display on the front of the card                                | `undefined`   | Yes      | can be a number or a string                                                                                  |
| name         | Name to display on the front of the card                                  | `undefined`   | Yes      |                                                                                                              |
| expiration   | Expiration Date to display on the front of the card                       | `undefined`   | Yes      | displayed as given, so it should be formatted                                                                |
| cvc          | CVC to display on the back of the card                                    | `undefined`   | Yes      | can be a number or a string                                                                                  |
| since        | Year for `Customer Since`                                                 | `undefined`   | no       | can be a number or a string                                                                                  |
| flipped      | Is the card flipped?                                                      | `false`       | no       | Use this to programmatically `flip` the card.                                                                |
| friction     | Friction for the card flip                                                | `6`           | no       | I couldn't figure out what this does, but I'm just passing it to `react-native-flip-card` if anyone wants it |
| fontSize     | Base font size to use                                                     | `20`          | no       | will scale all displayed text                                                                                |
| height       | Height for card                                                           | `190`         | no       |                                                                                                              |
| width        | Width for card                                                            | `300`         | no       |                                                                                                              |
| cardStyles   | Additional styles to apply to the component from `react-native-flip-card` | `{}`          | no       |                                                                                                              |
| frontStyles  | Additional styles to apply to the front of the card                       | `{}`          | no       |                                                                                                              |
| backStyles   | Additional styles to apply to the back of the card                        | `{}`          | no       |                                                                                                              |
| borderRadius | Border Radius to use on the images                                        | 20            | no       |                                                                                                              |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
