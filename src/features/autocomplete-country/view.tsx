import { observer } from "mobx-react-lite";
import { useRef } from "react";
import { CountryInfo } from "../../api/apiService";
import { AutocompleteControl } from "../../shared/ui/autocomplete-control/AutocompleteControl";
import { CountrySuggestion } from "../../shared/ui/autocomplete-control/CountrySuggestion";
import { AutocompleteViewModel } from "./view-model";

interface AutocompleteViewProps {
    maxSuggestions?: number;
}

export const AutocompleteView = observer(
    ({ maxSuggestions }: AutocompleteViewProps) => {
        const vmRef = useRef(new AutocompleteViewModel());
        const vm = vmRef.current;

        const renderSuggestion = (country: CountryInfo) => (
            <CountrySuggestion
                name={country.name}
                fullName={country.fullName}
                nationalFlagUrl={country.flag}
                onSelect={() => vm.handleSelect(country)}
            />
        );

        return (
            <AutocompleteControl
                inputValue={vm.inputValue}
                handleChangeInputValue={vm.handleInputValueChange}
                suggestions={vm.suggestions}
                renderSuggestion={renderSuggestion}
                maxSuggestions={maxSuggestions}
                placeholder={`Поиск стран (макс. ${maxSuggestions} подсказок)`}
            />
        );
    }
);
