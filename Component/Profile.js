import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const Profile = (props) => {
  console.log(props);
  const { route } = props;
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 200, height: 200, borderRadius: 10000, marginLeft: 80, marginTop: 20 }}
          source={{
            uri: "https://media.viez.vn/prod/2021/8/16/ly_giai_hien_tuong_vit_vang_dang_lan_truyen_tren_mang_xa_hoi_193620_6465193e51.jpg",
          }}
        ></Image>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("EditProfile", { ...route.params })
          }
        >
          <Image
            style={{ height: 40, width: 40, marginTop: 200, marginLeft:20}}
            source={{
              uri: "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/256/edit-icon.png",
            }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Họ và tên: {route.params.name}</Text>
      <Text style={styles.text}>Tuổi: {route.params.age}</Text>
      <Text style={styles.text}>Quê quán: {route.params.Address}</Text>
      <Text style={styles.text}>SĐT: {route.params.Phonenumber}</Text>
      <Text style={styles.text}>Gmail: {route.params.Email}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "left",
    flex: 1,
  },
  text: {
    marginLeft: 50,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "500",
    alignItems: "left",
  },
});
