export enum ButtonPosition {
    Left = "left",
    Right = "right",
}

export interface Button {
    position: ButtonPosition;
    text: string;
    callback: () => void;
}
