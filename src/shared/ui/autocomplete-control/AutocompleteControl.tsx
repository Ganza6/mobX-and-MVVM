import styles from "./AutocompleteControl.module.css";

interface AutocompleteControlProps<T> {
    suggestions: T[];
    inputValue: string;
    handleChangeInputValue: (value: string) => void;
    renderSuggestion: (item: T) => React.ReactNode;
    maxSuggestions?: number;
    placeholder?: string;
}

export function AutocompleteControl<T>({
    suggestions,
    inputValue,
    handleChangeInputValue,
    renderSuggestion,
    maxSuggestions = 10,
    placeholder,
}: AutocompleteControlProps<T>) {
    const visibleSuggestions = suggestions.slice(0, maxSuggestions);

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                value={inputValue}
                onChange={(e) => handleChangeInputValue(e.target.value)}
                placeholder={placeholder}
            />
            {visibleSuggestions.length > 0 && (
                <ul className={styles.suggestionsList}>
                    {visibleSuggestions.map((item, index) => (
                        <li key={"suggestion-" + index}>
                            {renderSuggestion(item)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
