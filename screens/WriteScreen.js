import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import WriteHeader from "../components/WriteHeader";

const WriteScreen = () => {
    return (
        <SafeAreaView style={styles.block}>
            <WriteHeader />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default WriteScreen;