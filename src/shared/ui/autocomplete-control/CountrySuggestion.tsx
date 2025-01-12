import styles from "./AutocompleteControl.module.css";

interface CountrySuggestionProps {
    name: string;
    fullName: string;
    nationalFlagUrl: string;
    onSelect: () => void;
}

export function CountrySuggestion({
    name,
    fullName,
    nationalFlagUrl,
    onSelect,
}: CountrySuggestionProps) {
    return (
        <div onClick={onSelect} className={styles.suggestionItem}>
            <img src={nationalFlagUrl} alt={name} className={styles.flag} />
            <span className={styles.name}>{name}</span>
            <span className={styles.fullName}>({fullName})</span>
        </div>
    );
}
