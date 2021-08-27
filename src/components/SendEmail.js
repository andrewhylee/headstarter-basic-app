import React from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: "space-around",
    marginTop: 20,
  },
  textInput: {
    fontWeight: "300",
    borderWidth: 1.5,
    borderRadius: 3,
    marginTop: 5,
    fontSize: 15,
    padding: 5,
  },
  textLabel: {
    fontSize: 15,
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginVertical: 20,
    borderRadius: 4,
    elevation: 3,
    color: "pink",
    backgroundColor: "skyblue",
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

const SendEmail = () => {
  return (
    <View style={styles.viewContainer}>
      <Formik
        initialValues={{
          from_name: "",
          to_name: "",
          email: "",
          split_amount: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikprops) => (
          <View>
            <Text style={styles.textLabel}>Enter Your Name:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Your Name"
              onChangeText={formikprops.handleChange("from_name")}
              value={formikprops.values.from_name}
            />
            <Text style={styles.textLabel}>Enter Recipient's Name:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Recipient's Name"
              onChangeText={formikprops.handleChange("to_name")}
              value={formikprops.values.to_name}
            />
            <Text style={styles.textLabel}>
              Enter Recipient's Email Address:
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="someone@anyemail.com"
              onChangeText={formikprops.handleChange("email")}
              value={formikprops.values.email}
            />

            <TouchableOpacity
              style={styles.button}
              title="submit"
              onPress={formikprops.handleSubmit}
            >
              <Text style={styles.textButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* <Text style={styles.textLabel}>Enter Recipient's Email Address:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="someone@anyemail.com"
        /> */}
      </Formik>
    </View>
  );
};

export default SendEmail;