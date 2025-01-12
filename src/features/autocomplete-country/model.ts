import { CountryInfo, getCountryByName } from "../../api/apiService";

export class AutocompleteModel {
    async getSuggestions(query: string): Promise<CountryInfo[]> {
        try {
            const suggestions = await getCountryByName(query);

            const uniqueSuggestions = suggestions.filter(
                (suggestion, index, self) =>
                    index === self.findIndex((s) => s.name === suggestion.name)
            );
            return uniqueSuggestions;
        } catch (error) {
            console.error("Error fetching suggestions:", error);
            return [];
        }
    }
}
