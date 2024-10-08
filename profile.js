import { View, Text } from "react-native";
import React from "react";
import Contact from "../components/contact";
import NameTitle from "../components/nameTitle";
import Settings from "../components/settings";


const Profile = () => {
  return (
    <View style={{ padding: 20 }}>

      <NameTitle/>
      <Contact/> 
      <Settings/>
    </View>
  );
};

export default Profile;
