import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export class Search extends Component {
  state = {
    text: "",
  };
  ontextchange = (text) => {
    this.setState({ text: text.nativeEvent.text });
  };
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 350,
            height: 150,
            justifyContent: "center",
          }}
        >
          <Input
            leftIcon={<Icon name="user" size={20} color="#000" />}
            value={this.state.text}
            ref="searchtext"
            onChange={this.ontextchange}
            placeholder="Enter username"
          />
          <Button
            title=" Search"
            type="outline"
            icon={<Icon name="search" size={15} color="#000" />}
            onPress={() => {
              this.props.searchevent(this.state.text);
            }}
          />
          {this.props.showclear && (
            <View style={{ marginTop: 10 }}>
              <Button
                title=" Clear"
                type="outline"
                onPress={() => {
                  this.props.clearuser();
                  //   this.refs.searchtext.clear();
                  this.setState({ text: "" });
                  //   this.TextInput.clear();
                }}
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Search;
