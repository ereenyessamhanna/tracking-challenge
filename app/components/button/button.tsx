import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle: object;
  tittleStyle: object;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  tittleStyle,
}) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={tittleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export { Button };
