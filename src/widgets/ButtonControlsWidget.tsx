import { AlertInputControl } from "../features/button-controls/alert/view";
import { HelloWorldControl } from "../features/button-controls/hello-world/view";

export function ButtonControlsWidget() {
    return (
        <>
            <HelloWorldControl />
            <AlertInputControl />
        </>
    );
}
