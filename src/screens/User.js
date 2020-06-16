import React, { Component } from "react";
import { View, Text } from "native-base";

export class User extends Component {
  render() {
    const user = this.props.navigation.state.params;
    return (
      <View>
        <Text>{user.login}</Text>
      </View>
    );
  }
}

export default User;
