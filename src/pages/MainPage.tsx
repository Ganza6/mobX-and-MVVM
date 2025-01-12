import { AutoCompleteCountryWidget } from "../widgets/AutocompleteCountryWidget";
import { ButtonControlsWidget } from "../widgets/ButtonControlsWidget";

export function MainPage() {
    return (
        <>
            <ButtonControlsWidget />
            <AutoCompleteCountryWidget />
        </>
    );
}
