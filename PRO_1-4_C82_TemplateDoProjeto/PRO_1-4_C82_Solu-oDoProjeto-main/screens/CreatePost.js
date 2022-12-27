import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


async addPost() {
  if(
    this.state.caption
  ) {
   let postData ={
    preview_image: this.state.preview_image,
    caption: this.state.caption,
    author: friebase.auth().currentUser.displayName,
    created_on: new_date(),
    author_uid: firebase.auth().currentUser.uid,
    profile_image: this.state.profile_image,
    likes: 0 
   };
   await firebase()
     .dataBase()
     .ref(
      "/posts/" +
      Math.random()
      .toString(36)
      .slice(2)
     )
     .set(postData)
     .then(function (snapshot) { });
     this.setUpdateToTrue();
     this.props.navigation.navigate("Feed");
  }else {
    Alert.alert(
      "Error",
      "Todos os campos são obrigatórios",
      [{ text: "Ok", onPress:() => console.log("Ok Pressionado")}],
      [{ cancelable: false}]
    )
  }
};

export default class RideHistoryScreen extends Component {
  render() {
    constructor(props) {
      super(props);
      this.state ={
         light_theme: true,
         post_id: this.props.post.key,
         post_data: this.props.post.value
      };
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeAreaView}>
            <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                    <Image
                    source={require("./assets/logo.png")}
                    style={styles.iconImage}
                    ></Image>
                </View>
                <View style={styles.appTitleContainer}>
                    <Text style={styles.appTitleText}>Novo Post</Text>
                </View>
            </View>
             <View style={styles.fieldsContainer}>
                <ScrollView>
                    <Image
                    source={preview_images[this.state.previewImage]}
                    style={styles.previewImage}></Image>
                    <View style={{height: RFValue(this.state.dropdownHeight)}}>
                        <DropDownPicker
                        items={[
                            { label: "image 1", value: image_1 },

                            { label: "image 2", value: image_2 },
                            
                            { label: "image 3", value: image_3 },
                            
                            { label: "image 4", value: image_4 },
                            
                            { label: "image 5", value: image_5 },
                            
                            { label: "image 6", value: image_6 },
                            
                            { label: "image 7", value: image_7 }
                            
                        ]}
                        defaultValue={this.state.previewImage}

                        containerStyle={{
                            height: 40,
                            borderRadius: 20,
                            marginBottom: 10
                        }}

                        onOpen={() => {
                            this.setState({dropdownHeight: 170})
                        }}

                        onClose={() => {
                            this.setState({dropdownHeight: 40})
                        }}

                        style={{ backgroundColor: "transparent"}}

                        itemStyle={{
                            justifyContent: "flexStart"
                        }}

                        dropDownStyle={{ backgroundColor: "#2a2a2a"}}

                        labelStyle={{
                            color: "white"
                        }}

                        arrowStyle={{
                            color: "white"
                        }}

                        onChangeItem={item =>
                        this.setState({
                            previewImage: item.value
                        })
                    }

                    />
                    </View>


                    <TextInput
                       style={styles.inputFont}
                       onChangeText={caption => this.setState({ caption })}
                       placeHolder={"Legenda"}
                       PlaceHolderTextColor="white"
                       />
                </ScrollView>
                <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addPost()}
                  title="Submit"
                  color="#841584"
                />
              </View>
             </View>
             <View style={{ flex: 0.08}}/>
        </SafeAreaView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  }
});