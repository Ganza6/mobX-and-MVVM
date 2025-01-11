import { useState } from "react";
import { ButtonPosition } from "../../../shared/ui/types";

export function useAlertViewModel() {
    const [value, setValue] = useState("");

    const showTextAlert = () => {
        alert(value);
    };

    const showNumberAlert = () => {
        if (Number(value)) {
            alert(value);
        }
    };

    const buttons = [
        {
            text: "текст alert",
            callback: showTextAlert,
            position: ButtonPosition.Left,
        },
        {
            text: "number alert",
            callback: showNumberAlert,
            position: ButtonPosition.Right,
        },
    ];

    return {
        value,
        setValue,
        buttons,
    };
}
