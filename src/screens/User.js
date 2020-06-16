import React, { Component } from "react";
import { View, Text } from "native-base";
import axios from "axios";
import { StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export class User extends Component {
  state = {
    user: [],
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const datas = await axios.get(
      `https://api.github.com/users/${this.props.navigation.state.params.login}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(datas.data);
    this.setState({ user: datas.data });
  };

  render() {
    const user = this.state.user;
    console.log(user.hireable);

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={styles.titlebar}>
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#52575D"
            ></Ionicons>
            <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
          </View> */}
          <View style={{ alignSelf: "center", marginTop: 15 }}>
            <View style={styles.profileImage}>
              <Image
                source={{ uri: user.avatar_url }}
                style={styles.image}
              ></Image>
            </View>
            {/* <View
              style={[styles.active, { backgroundColor: "#34FFB9" }]}
            ></View> */}
          </View>
          <View style={styles.userinfo}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              {user.login}
            </Text>
            <Text style={[styles.text, { color: "#aeb5bc", fontSize: 14 }]}>
              {user.bio}
            </Text>
          </View>
          <View style={styles.statscontainer}>
            <View style={styles.statbox}>
              <Text style={[styles.text, { fontSize: 24 }]}>
                {user.public_repos}
              </Text>
              <Text style={[styles.text, styles.subtext]}>Repos</Text>
            </View>
            <View
              style={[
                styles.statbox,
                {
                  borderColor: "#dfd8c8",
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={[styles.text, { fontSize: 24 }]}>
                {user.followers}
              </Text>
              <Text style={[styles.text, styles.subtext]}>Followers</Text>
            </View>
            <View style={styles.statbox}>
              <Text style={[styles.text, { fontSize: 24 }]}>
                {user.following}
              </Text>
              <Text style={[styles.text, styles.subtext]}>Following</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#52575D",
  },
  subtext: {
    fontSize: 12,
    textTransform: "uppercase",
    color: "#aeb5bc",
    fontWeight: "500",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titlebar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  active: {
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  userinfo: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statscontainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statbox: {
    alignItems: "center",
    flex: 1,
  },
});

export default User;
