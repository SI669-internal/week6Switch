import React from 'react';
import { Text, View, Switch } from 'react-native';
import { externalStyles } from './ExternalStyles';

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
      <View style={[externalStyles.container, 
        this.state.switchValue ? 
        externalStyles.bgDark : 
          {}]}>
        <Text style={this.state.switchValue ?
          externalStyles.textDark :
          externalStyles.textLight}>
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

export default DarkModeCondApp2;
