import InputControl from "../../../shared/ui/InputControl";
import { useHelloWorldViewModel } from "./view-model";

export function HelloWorldControl() {
    const vm = useHelloWorldViewModel();

    return (
        <InputControl
            inputValue={vm.value}
            handleChangeInputValue={vm.setValue}
            buttons={vm.buttons}
        />
    );
}
