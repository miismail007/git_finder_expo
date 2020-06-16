import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import Search from "../components/Search";
import { ListItem } from "react-native-elements";
import { List } from "native-base";

export class Home extends Component {
  state = {
    users: [],
    loading: false,
  };

  // componentDidMount = async () => {
  //   // console.log(text);
  //   this.setState({ loading: true });
  //   const datas = await axios.get(
  //     `https://api.github.com/users?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: datas.data, loading: false });
  // };
  searchevent = async (text) => {
    this.setState({ loading: true });
    const datas = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(datas.data.items);
    this.setState({ users: datas.data.items, loading: false });
  };
  clearuser = () => {
    this.setState({ users: [] });
  };
  render() {
    return (
      <View style={{ backgroundColor: "#fff", height: 900 }}>
        <Search
          searchevent={this.searchevent}
          clearuser={this.clearuser}
          showclear={this.state.users.length > 0 ? true : false}
        />
        <List style={{ alignItems: "center", marginTop: 15, height: 370 }}>
          <FlatList
            style={{
              width: 350,
              height: 150,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.node_id}
            data={this.state.users}
            renderItem={(element) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("User", element.item);
                  }}
                >
                  <ListItem
                    roundAvatar
                    leftAvatar={{ source: { uri: element.item.avatar_url } }}
                    bottomDivider
                    chevron
                    title={element.item.login}
                    // onPress={}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </List>
      </View>
    );
  }
}

export default Home;
