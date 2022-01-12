import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Button } from "../../components";
import { styles } from "./styles";

const Home = () => {
  const [isStartTracking, setIsStartTracking] = useState(false);
  const [timer, setTimer] = useState(0);
  let intervalTimer = useRef(0);

  // functionality 
  useEffect(() => {
    return () => stopTracking();
  }, []);

  const startAndStopTracking = () => {
    isStartTracking ? stopTracking() : startTracking();
  };

  const startTracking = () => {
    setIsStartTracking(true);
    if (!intervalTimer.current) {
      intervalTimer.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
  };

  const stopTracking = () => {
    setIsStartTracking(false);
    clearInterval(intervalTimer.current);
    intervalTimer.current = null;
    setTimer(0);
  };


  // UI
  const renderStartAndStopButton = () => {
    return (
      <Button
        title={isStartTracking ? "Start" : "Stop"}
        onPress={() => startAndStopTracking()}
        buttonStyle={styles.button}
        tittleStyle={styles.buttonText}
      />
    );
  };

  const renderTimer = () => {
    return <Text>{timer}</Text>;
  };

  return (
    <View style={styles.container}>
      {renderStartAndStopButton()}
      {renderTimer()}
    </View>
  );
};

export { Home };
