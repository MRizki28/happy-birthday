import type { Message } from "../types";
import { MessageDivider } from "./MessageDevider";
import { SpeakerButton } from "./SpeakerButton";

interface MessageCardProps {
    inView: boolean;
    mainText: string;
    subText: string;
    message: Message;
    isCurrentSpeaking: boolean;
    onSpeech: () => void;
}

export const MessageCard: React.FC<MessageCardProps> = ({
    inView,
    mainText,
    subText,
    message,
    isCurrentSpeaking,
    onSpeech
}) => (
    <div
        className="relative group"
        style={{
            transform: inView ? 'translateY(0) rotateX(0)' : 'translateY(15px) rotateX(5deg)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.8s ease-out 0.4s'
        }}
    >
        {/* Card background with gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl blur-sm opacity-20 group-active:opacity-30 transition-opacity duration-300"></div>

        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
            {/* Mobile speaker button */}
            <SpeakerButton
                isCurrentSpeaking={isCurrentSpeaking}
                onSpeech={onSpeech}
            />

            <h2 className="text-2xl font-bold text-white mb-6 min-h-[2.5rem] leading-tight pr-12">
                {mainText}
                {inView && mainText.length < message.text.length && <span className="animate-pulse text-rose-300">|</span>}
            </h2>

            <MessageDivider />

            <p className="text-white/90 text-base min-h-[2rem] leading-relaxed font-light">
                {subText}
                {inView && subText.length < message.subtext.length && <span className="animate-pulse text-rose-300">|</span>}
            </p>
        </div>
    </div>
);