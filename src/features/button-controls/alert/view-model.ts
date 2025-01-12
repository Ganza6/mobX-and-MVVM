import { InputState } from "../../../shared/logic/input-state/InputState";
import { ButtonPosition } from "../../../shared/ui/input-control/types";
import { BUTTON_TEXT } from "./constants";

export class AlertViewModel extends InputState {
    showTextAlert = () => {
        alert(this.inputValue);
    };

    showNumberAlert = () => {
        const num = Number(this.inputValue);
        if (!isNaN(num) && this.inputValue.length > 0) {
            alert(num);
        }
    };

    buttons = [
        {
            text: BUTTON_TEXT.TEXT_ALERT,
            callback: this.showTextAlert,
            position: ButtonPosition.Left,
        },
        {
            text: BUTTON_TEXT.NUMBER_ALERT,
            callback: this.showNumberAlert,
            position: ButtonPosition.Right,
        },
    ];
}
