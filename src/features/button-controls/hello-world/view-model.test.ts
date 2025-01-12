import { ButtonPosition } from "../../../shared/ui/input-control/types";
import { BUTTON_TEXT, HELLO_WORLD_TEXT } from "./constants";
import { HelloWorldViewModel } from "./view-model";

describe("HelloWorldViewModel", () => {
    let viewModel: HelloWorldViewModel;

    beforeEach(() => {
        viewModel = new HelloWorldViewModel();
    });

    const getButtonByText = (text: string) =>
        viewModel.buttons.find((button) => button.text === text);

    it("должен очищать значение при нажатии на кнопку очистить", () => {
        viewModel.setInputValue("test");
        getButtonByText(BUTTON_TEXT.CLEAR)?.callback();
        expect(viewModel.inputValue).toBe("");
    });

    it("должен устанавливать Hello world при нажатии на вторую кнопку", () => {
        getButtonByText(BUTTON_TEXT.HELLO_WORLD)?.callback();
        expect(viewModel.inputValue).toBe(HELLO_WORLD_TEXT);
    });

    it("должен иметь две кнопки справа", () => {
        expect(viewModel.buttons).toHaveLength(2);
        expect(
            viewModel.buttons.every(
                (button) => button.position === ButtonPosition.Right
            )
        ).toBe(true);
    });
});
