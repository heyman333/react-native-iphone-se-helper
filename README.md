# react-native-iphone-se-helper

This package was created with strong motivation for [react-native-iphone-x-helper](https://github.com/ptelad/react-native-iphone-x-helper) (author: [ptelad](https://github.com/ptelad))

## install 

```bash
yarn install react-native-iphone-se-helper
#or 
npm install react-native-iphone-se-helper --save
```

## API

### isIphoneSE(): boolean 

returns whether the device is a iPhons SE or others

### concernSESize(originalSize: number, seSize: number): number

determines the size by dividing whether it is SE or not.


## Example
```js
import { isIphoneSE, concernSESize } from "./libs";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: concernSESize(20, 11),
    textAlign: "center",
    margin: isIphoneSE() ? 5 : 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

```















