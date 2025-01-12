import { BUTTON_TEXT } from "./constants";
import { AlertViewModel } from "./view-model";

describe("AlertViewModel", () => {
    let viewModel: AlertViewModel;
    let alertMock: jest.SpyInstance;

    beforeEach(() => {
        viewModel = new AlertViewModel();
        alertMock = jest.spyOn(window, "alert").mockImplementation();
    });

    afterEach(() => {
        alertMock.mockRestore();
    });

    const getButtonByText = (text: string) =>
        viewModel.buttons.find((button) => button.text === text);

    it("должен показывать alert с текстом при нажатии на кнопку", () => {
        viewModel.setInputValue("test text");
        getButtonByText(BUTTON_TEXT.TEXT_ALERT)?.callback();
        expect(alertMock).toHaveBeenCalledWith("test text");
    });

    describe("number alert", () => {
        it("должен показывать alert с числом для числового ввода", () => {
            viewModel.setInputValue("123");
            getButtonByText(BUTTON_TEXT.NUMBER_ALERT)?.callback();
            expect(alertMock).toHaveBeenCalledWith(123);
        });

        it("не должен показывать alert для нечислового ввода", () => {
            viewModel.setInputValue("not a number");
            getButtonByText(BUTTON_TEXT.NUMBER_ALERT)?.callback();
            expect(alertMock).not.toHaveBeenCalled();
        });

        it("не должен показывать alert для пустого ввода", () => {
            viewModel.setInputValue("");
            getButtonByText(BUTTON_TEXT.NUMBER_ALERT)?.callback();
            expect(alertMock).not.toHaveBeenCalled();
        });
    });
});
