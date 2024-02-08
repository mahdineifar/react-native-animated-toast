# react-native-toast-animated

An animated toast component for React Native

## Installation

```sh
npm install react-native-toast-animated
```

## Usage

Wrap your App with `ToastProvider` component and pass your config object.

```js
import ToastProvider from 'react-native-toast-animated';
import { ToastPosition, type ConfigType } from 'react-native-toast-animated';

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
