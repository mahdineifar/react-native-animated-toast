# react-native-animated-toast

An animated toast component for React Native

## Installation

```sh
npm install react-native-animated-toast
```

## Usage

Wrap your App with `ToastProvider` component and pass your config object.

```js
import ToastProvider from 'react-native-animated-toast';
import { ToastPosition, type ConfigType } from 'react-native-animated-toast';

...

const config: ConfigType = {
  position: ToastPosition.TOP,
};

...

return (
    <ToastProvider config={config}>
      ...
    </ToastProvider>
  );
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
