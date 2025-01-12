import { fireEvent, render, screen } from "@testing-library/react";
import InputControl from "./InputControl";
import { ButtonPosition } from "./types";

describe("InputControl", () => {
    const defaultProps = {
        inputValue: "",
        handleChangeInputValue: jest.fn(),
    };

    it("должен корректно отображать значение инпута", () => {
        render(<InputControl {...defaultProps} inputValue="test" />);
        expect(screen.getByRole("textbox")).toHaveValue("test");
    });

    it("должен вызывать handleChangeInputValue при изменении", () => {
        const handleChange = jest.fn();
        render(
            <InputControl
                {...defaultProps}
                handleChangeInputValue={handleChange}
            />
        );

        fireEvent.change(screen.getByRole("textbox"), {
            target: { value: "new" },
        });
        expect(handleChange).toHaveBeenCalledWith("new");
    });

    it("должен отображать корректное количество кнопок", () => {
        const leftButtons = Array.from({ length: 5 }, () => ({
            text: `Left`,
            callback: jest.fn(),
            position: ButtonPosition.Left,
        }));

        const rightButtons = Array.from({ length: 6 }, () => ({
            text: `Right`,
            callback: jest.fn(),
            position: ButtonPosition.Right,
        }));

        const buttons = [...leftButtons, ...rightButtons];

        render(<InputControl {...defaultProps} buttons={buttons} />);

        const leftButtonElements = screen.getAllByText(/Left/);
        const rightButtonElements = screen.getAllByText(/Right/);

        expect(leftButtonElements).toHaveLength(5);
        expect(rightButtonElements).toHaveLength(6);
    });
});
