import { Button } from "./types";

function ButtonsList({ buttons }: { buttons: Button[] }) {
    return (
        <>
            {buttons.map((button, index) => {
                const { text } = button;
                return (
                    <button key={text + index} onClick={button.callback}>
                        {text}
                    </button>
                );
            })}
        </>
    );
}

export default ButtonsList;
