import { InputState } from "./InputState";

describe("InputState", () => {
    let inputState: InputState;

    beforeEach(() => {
        inputState = new InputState();
    });

    it("должен иметь пустое начальное значение по умолчанию", () => {
        expect(inputState.inputValue).toBe("");
    });

    it("должен принимать начальное значение через конструктор", () => {
        const stateWithInitial = new InputState("initial");
        expect(stateWithInitial.inputValue).toBe("initial");
    });

    it("должен обновлять значение через setInputValue", () => {
        inputState.setInputValue("new value");
        expect(inputState.inputValue).toBe("new value");
    });

    it("должен очищать значение через clearInputValue", () => {
        inputState.setInputValue("some value");
        inputState.clearInputValue();
        expect(inputState.inputValue).toBe("");
    });
});
