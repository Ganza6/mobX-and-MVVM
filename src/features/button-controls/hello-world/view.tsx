import { observer } from "mobx-react-lite";
import { useRef } from "react";
import InputControl from "../../../shared/ui/input-control/InputControl";
import { HelloWorldViewModel } from "./view-model";

export const HelloWorldControl = observer(() => {
    const vmRef = useRef(new HelloWorldViewModel());
    const vm = vmRef.current;

    return (
        <InputControl
            inputValue={vm.inputValue}
            handleChangeInputValue={vm.setInputValue}
            buttons={vm.buttons}
        />
    );
});
