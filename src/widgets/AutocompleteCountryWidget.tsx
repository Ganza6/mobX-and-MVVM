import { AutocompleteView } from "../features/autocomplete-country/view";
import styles from "./styles.module.css";
export function AutoCompleteCountryWidget() {
    return (
        <div className={styles.container}>
            <div className={styles.widgetContainer}>
                <AutocompleteView maxSuggestions={3} />
            </div>
            <div className={styles.widgetContainer}>
                <AutocompleteView maxSuggestions={10} />
            </div>
        </div>
    );
}
