import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import FeedList from "../components/FeedList";
import FloatingWriteButton from "../components/FloatingWriteButton";
import LogContext from "../contexts/LogContext";

const FeedsScreen = () => {
    const {logs} = useContext(LogContext);
    [hidden, setHidden] = useState(false);
    const onScrolledToBottom = (isBottom) => {
      if (hidden !== isBottom) {
        setHidden(isBottom);
      }
    };
    
    return (
        <View style={styles.block}>
            <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
            <FloatingWriteButton hidden={hidden} />
        </View>
    );
}
  
const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

export default FeedsScreen;