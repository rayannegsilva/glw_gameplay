import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

export function TextArea({ ...rest }: TextInputProps) {
    return (
        <TextInput
            {...rest}
            style={styles.container}
        />


    );
}