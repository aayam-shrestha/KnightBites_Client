import React, { useState, useEffect } from "react";
import { Alert, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { Button } from "react-native-paper";

import { postDetailsStyles } from "../styles/postDetails";

export default function PostScreen({ route, navigation }) {
  const poster = route.params.item.studentemail;
  const iconName = route.params.item.icon;

  return (
    <View style={postDetailsStyles.screen}>
      <View style={postDetailsStyles.allWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Poster", { poster })}
          style={{ flexDirection: "row" }}
        >
          <Ionicons name={iconName} size={40} color="#8C2131" />
          <Text style={postDetailsStyles.poster}>
            {route.params.item.firstname} {route.params.item.lastname}
          </Text>
        </TouchableOpacity>
        <Text style={postDetailsStyles.dateText}>
          {" "}
          {moment(route.params.item.posttime).format(
            "MMMM D, YYYY [at] h:mm a"
          )}
        </Text>

        <View style={postDetailsStyles.detailsWrapper}>
          <Text style={postDetailsStyles.title}>
            {route.params.item.posttitle}
            {"\n"}
          </Text>
          <Text style={postDetailsStyles.body}>
            {route.params.item.post}
            {"\n"}
          </Text>
        </View>
        <Button
          onPress={() => {
            Alert.alert("Signed up for event!");
          }}
          style={postDetailsStyles.signupButton}
        >
          <Text style={postDetailsStyles.signupButtonText}>Attend</Text>
        </Button>
      </View>
    </View>
  );
}
