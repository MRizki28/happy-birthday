import { useEffect, useState } from "react";
import type { TypingResult } from "../types";

export const useTypingEffect = (text: string, speed: number = 50, startTyping: boolean = false): TypingResult => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [isComplete, setIsComplete] = useState<boolean>(false);

    useEffect(() => {
        if (!startTyping) {
            setDisplayedText('');
            setIsComplete(false);
            return;
        }

        let index = 0;
        setDisplayedText('');
        setIsComplete(false);

        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.substring(0, index + 1));
                index++;
            } else {
                setIsComplete(true);
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed, startTyping]);

    return { displayedText, isComplete };
};
