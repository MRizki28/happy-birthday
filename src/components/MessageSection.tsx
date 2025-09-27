import { useInView } from "../hooks/useInView";
import { useTypingEffect } from "../hooks/useTypingEffect";
import type { Message } from "../types";
import SpeechUtil from "../utils/SpeechUtil";
import { DateSection } from "./DateSection";
import { DecorativeElements } from "./DecorativeElement";
import { MessageCard } from "./MessageCard";
import { ScrollIndicator } from "./ScrollIndicator";

interface MessageSectionProps {
    message: Message;
    index: number;
    isSpeaking: boolean;
    currentSpeakingId: number | null;
    setIsSpeaking: (value: boolean) => void;
    setCurrentSpeakingId: (value: number | null) => void;
}

export const MessageSection: React.FC<MessageSectionProps> = ({
    message,
    isSpeaking,
    currentSpeakingId,
    setIsSpeaking,
    setCurrentSpeakingId
}) => {
    const [ref, inView] = useInView(0.4);
    const { displayedText: mainText, isComplete: mainComplete } = useTypingEffect(
        message.text, 80, inView
    );
    const { displayedText: subText } = useTypingEffect(
        message.subtext, 60, mainComplete
    );

    const isCurrentSpeaking = currentSpeakingId === message.id && isSpeaking;

    const handleSpeech = () => {
        SpeechUtil.speakText(
            message.text,
            message.subtext,
            message.id,
            isSpeaking,
            currentSpeakingId,
            setIsSpeaking,
            setCurrentSpeakingId
        );
    };

    return (
        <div
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative"
            style={{
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                opacity: inView ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
        >
            <div className="text-center space-y-4 w-full max-w-sm mx-auto">

                {/* Decorative elements */}
                <DecorativeElements inView={inView} />

                {/* Mobile-optimized message card */}
                <MessageCard
                    inView={inView}
                    mainText={mainText}
                    subText={subText}
                    message={message}
                    isCurrentSpeaking={isCurrentSpeaking}
                    onSpeech={handleSpeech}
                />

                {/* Date section for first message */}
                {message.id === 1 && <DateSection inView={inView} />}

                {/* Mobile scroll indicator */}
                {message.id < 6 && <ScrollIndicator inView={inView} />}
            </div>
        </div>
    );
};