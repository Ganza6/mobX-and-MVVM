import InputControl from "../../../shared/ui/InputControl";
import { useAlertViewModel } from "./view-model";

export function AlertInputControl() {
    const vm = useAlertViewModel();

    return (
        <InputControl
            inputValue={vm.value}
            handleChangeInputValue={vm.setValue}
            buttons={vm.buttons}
        />
    );
}
