import { observer } from "mobx-react-lite";
import { useRef } from "react";
import InputControl from "../../../shared/ui/input-control/InputControl";
import { AlertViewModel } from "./view-model";

export const AlertInputControl = observer(() => {
    const vmRef = useRef(new AlertViewModel());
    const vm = vmRef.current;

    return (
        <InputControl
            inputValue={vm.inputValue}
            handleChangeInputValue={vm.setInputValue}
            buttons={vm.buttons}
        />
    );
});
