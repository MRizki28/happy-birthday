import { useInView } from "../hooks/useInView";
import { useTypingEffect } from "../hooks/useTypingEffect";
import type { Message } from "../types";
import { DateSection } from "./DateSection";
import { DecorativeElements } from "./DecorativeElement";
import { MessageCard } from "./MessageCard";
import { ScrollIndicator } from "./ScrollIndicator";

interface MessageSectionProps {
    message: Message;
    index: number;
}

export const MessageSection: React.FC<MessageSectionProps> = ({
    message
}) => {
    const [ref, inView] = useInView(0.4);
    const { displayedText: mainText } = useTypingEffect(
        message.text, 80, inView
    );

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
                    message={message}
                />

                {/* Date section for first message */}
                {message.id === 1 && <DateSection inView={inView} />}

                {/* Mobile scroll indicator */}
                {message.id < 6 && <ScrollIndicator inView={inView} />}
            </div>
        </div>
    );
};