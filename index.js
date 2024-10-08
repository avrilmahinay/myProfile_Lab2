import { View, Image } from "react-native";

const Image = () => {
  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require('myProfile/profile/cute.jpg')} 
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
};

export default Image;
