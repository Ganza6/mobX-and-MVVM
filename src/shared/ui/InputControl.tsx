import ButtonsList from "./ButtonsList";
import "./style.css";
import { Button, ButtonPosition } from "./types";

interface InputControlProps {
    buttons?: Button[];
    inputValue: string;
    handleChangeInputValue: (newValue: string) => void;
}

function InputControl({
    buttons,
    inputValue,
    handleChangeInputValue,
}: InputControlProps) {
    const leftButtons =
        buttons?.filter((button) => button.position === ButtonPosition.Left) ??
        [];

    const rightButtons =
        buttons?.filter((button) => button.position === ButtonPosition.Right) ??
        [];

    return (
        <div className="inputControl">
            <ButtonsList buttons={leftButtons} />
            <input
                onChange={(e) => handleChangeInputValue(e.target.value)}
                value={inputValue}
            />
            <ButtonsList buttons={rightButtons} />
        </div>
    );
}

export default InputControl;
