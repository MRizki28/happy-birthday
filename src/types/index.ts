export interface Message {
    id: number;
    text: string;
    subtext: string;
}

export interface Heart {
    id: number;
    left: number;
    delay: number;
    size: number;
    top: number;
}

export interface Firework {
    id: number;
    left: number;
    top: number;
    delay: number;
    duration: number;
    color: string;
}

export interface TypingResult {
    displayedText: string;
    isComplete: boolean;
}

export interface InViewHook {
    ref: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
    inView: boolean;
}