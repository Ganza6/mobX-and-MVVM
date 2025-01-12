import { AlertInputControl } from "../features/button-controls/alert/view";
import { HelloWorldControl } from "../features/button-controls/hello-world/view";
import styles from "./styles.module.css";

export function ButtonControlsWidget() {
    return (
        <div className={styles.container}>
            <div className={styles.widgetContainer}>
                <HelloWorldControl />
            </div>
            <div className={styles.widgetContainer}>
                <AlertInputControl />
            </div>
        </div>
    );
}
