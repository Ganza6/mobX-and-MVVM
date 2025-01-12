import styles from "./InputControl.module.css";
import { Button } from "./types";

function ButtonsList({ buttons }: { buttons: Button[] }) {
    return (
        <>
            {buttons.map((button, index) => {
                const { text } = button;
                return (
                    <button
                        key={text + index}
                        onClick={button.callback}
                        className={styles.button}
                    >
                        {text}
                    </button>
                );
            })}
        </>
    );
}

export default ButtonsList;
