import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

class DarkModeCondApp2 extends React.Component {
  constructor() {
    super();

    this.state = {
      switchValue: false,
    }
  }

  onValueChange = (value) => {
    this.setState({
      switchValue: value,
    });
  }

  render() {
    return (
      <View style={[oneStyle.container, 
        this.state.switchValue ? 
          oneStyle.bgDark : 
          {}]}>
        <Text style={this.state.switchValue ?
          oneStyle.textDark :
          oneStyle.textLight}>
          Dark Mode: 
          {this.state.switchValue ?
            "On" :
            "Off"
          }
        </Text>
        <Switch
          onValueChange={this.onValueChange}
          value={this.state.switchValue}/>
      </View>
    );
  }
}

const oneStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
  },
  bgDark: {
    backgroundColor: 'black'
  },
  textLight: {
    color: 'black'
  },
  textDark: {
    color: 'white'
  }
});

export default DarkModeCondApp2;
