import { render, screen } from "@testing-library/react";
import { AutocompleteControl } from "./AutocompleteControl";

describe("AutocompleteControl", () => {
    const defaultProps = {
        suggestions: [],
        inputValue: "",
        handleChangeInputValue: jest.fn(),
        renderSuggestion: (item: { text: string }) => <div>{item.text}</div>,
    };

    it("должен ограничивать количество отображаемых подсказок", () => {
        const suggestions = Array.from({ length: 5 }, () => ({
            text: "Suggestion",
        }));

        render(
            <AutocompleteControl
                {...defaultProps}
                suggestions={suggestions}
                maxSuggestions={3}
            />
        );

        const renderedSuggestions = screen.getAllByText("Suggestion");
        expect(renderedSuggestions).toHaveLength(3);
    });

    it("должен отображать все подсказки, если их меньше maxSuggestions", () => {
        const suggestions = Array.from({ length: 3 }, () => ({
            text: "Suggestion",
        }));

        render(
            <AutocompleteControl
                {...defaultProps}
                suggestions={suggestions}
                maxSuggestions={5}
            />
        );

        const renderedSuggestions = screen.getAllByText("Suggestion");
        expect(renderedSuggestions).toHaveLength(3);
    });
});
