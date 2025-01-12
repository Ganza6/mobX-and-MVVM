import { InputState } from "../../../shared/logic/input-state/InputState";
import { ButtonPosition } from "../../../shared/ui/input-control/types";
import { BUTTON_TEXT, HELLO_WORLD_TEXT } from "./constants";

export class HelloWorldViewModel extends InputState {
    setHelloWorld = () => {
        this.inputValue = HELLO_WORLD_TEXT;
    };

    buttons = [
        {
            text: BUTTON_TEXT.CLEAR,
            callback: this.clearInputValue,
            position: ButtonPosition.Right,
        },
        {
            text: BUTTON_TEXT.HELLO_WORLD,
            callback: this.setHelloWorld,
            position: ButtonPosition.Right,
        },
    ];
}
