import { action, makeObservable, observable } from "mobx";

export class InputState {
    inputValue = "";

    constructor(initialValue: string = "") {
        this.inputValue = initialValue;
        makeObservable(this, {
            inputValue: observable,
            setInputValue: action,
            clearInputValue: action,
        });
    }

    setInputValue = (newValue: string) => {
        this.inputValue = newValue;
    };

    clearInputValue = () => {
        this.inputValue = "";
    };
}
