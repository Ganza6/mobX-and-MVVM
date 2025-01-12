import { action, makeObservable, observable } from "mobx";
import { CountryInfo } from "../../api/apiService";
import { InputState } from "../../shared/logic/input-state/InputState";
import { AutocompleteModel } from "./model";

export class AutocompleteViewModel extends InputState {
    private model = new AutocompleteModel();
    private debounceTimeout: NodeJS.Timeout | null = null;
    suggestions: CountryInfo[] = [];

    constructor() {
        super();
        makeObservable(this, {
            suggestions: observable,
            setSuggestions: action,
            handleSelect: action,
        });
    }

    handleInputValueChange = (newValue: string) => {
        this.setInputValue(newValue);
        this.debouncedLoadSuggestions();
    };

    setSuggestions = (suggestions: CountryInfo[]) => {
        this.suggestions = suggestions;
    };

    private debouncedLoadSuggestions = () => {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }

        this.debounceTimeout = setTimeout(() => {
            this.loadSuggestions();
        }, 300);
    };

    private loadSuggestions = async () => {
        if (!this.inputValue) {
            this.setSuggestions([]);
            return;
        }

        const newSuggestions = await this.model.getSuggestions(this.inputValue);
        this.setSuggestions(newSuggestions);
    };

    handleSelect = (country: CountryInfo) => {
        this.inputValue = country.name;
        this.setSuggestions([]);
    };
}
