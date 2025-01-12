import { AutocompleteViewModel } from "./view-model";

describe("AutocompleteViewModel", () => {
    let viewModel: AutocompleteViewModel;

    beforeEach(() => {
        jest.useFakeTimers();
        viewModel = new AutocompleteViewModel();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it("должен очищать suggestions при пустом вводе", async () => {
        viewModel.handleInputValueChange("");
        jest.runAllTimers();
        expect(viewModel.suggestions).toHaveLength(0);
    });

    it("должен обновлять состояние при выборе страны", () => {
        const country = {
            name: "Россия",
            fullName: "Российская Федерация",
            flag: "flag1",
        };
        viewModel.suggestions = [country];

        viewModel.handleSelect(country);

        expect(viewModel.inputValue).toBe(country.name);
        expect(viewModel.suggestions).toHaveLength(0);
    });
});
