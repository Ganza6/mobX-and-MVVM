import { useState } from "react";
import { ButtonPosition } from "../../../shared/ui/types";

export function useHelloWorldViewModel() {
    const [value, setValue] = useState("");

    const clearValue = () => {
        setValue("");
    };

    const setHelloWorld = () => {
        setValue("Hello world");
    };

    const buttons = [
        {
            text: "очистить",
            callback: clearValue,
            position: ButtonPosition.Right,
        },
        {
            text: "hello world",
            callback: setHelloWorld,
            position: ButtonPosition.Right,
        },
    ];

    return {
        value,
        setValue,
        buttons,
    };
}
