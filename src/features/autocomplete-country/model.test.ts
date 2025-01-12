import { getCountryByName } from "../../api/apiService";
import { AutocompleteModel } from "./model";

jest.mock("../../api/apiService");

describe("AutocompleteModel", () => {
    let model: AutocompleteModel;
    const mockGetCountryByName = getCountryByName as jest.Mock;

    beforeEach(() => {
        model = new AutocompleteModel();
        mockGetCountryByName.mockClear();
    });

    it("должен возвращать уникальные подсказки", async () => {
        // Arrange
        const duplicateData = [
            { name: "Россия", fullName: "Российская Федерация", flag: "flag1" },
            { name: "Россия", fullName: "Российская Федерация", flag: "flag2" },
            { name: "Румыния", fullName: "Румыния", flag: "flag3" },
        ];
        mockGetCountryByName.mockResolvedValue(duplicateData);

        const result = await model.getSuggestions("Р");

        expect(result).toHaveLength(2); // Должно быть 2 уникальных результата
    });

    it("должен возвращать пустой массив при ошибке", async () => {
        const consoleSpy = jest.spyOn(console, "error").mockImplementation();
        mockGetCountryByName.mockRejectedValue(new Error("API Error"));

        const result = await model.getSuggestions("test");

        expect(result).toEqual([]);
        consoleSpy.mockRestore();
    });
});
