import { Volume2, VolumeX } from "lucide-react";

interface SpeakerButtonProps {
    isCurrentSpeaking: boolean;
    onSpeech: () => void;
}

export const SpeakerButton: React.FC<SpeakerButtonProps> = ({ isCurrentSpeaking, onSpeech }) => (
    <button
        onClick={onSpeech}
        className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 touch-manipulation ${isCurrentSpeaking
                ? 'bg-rose-500/20 text-rose-300 animate-pulse'
                : 'bg-white/10 active:bg-white/20 text-white/70 active:text-white'
            }`}
        title="Dengarkan pesan"
    >
        {isCurrentSpeaking ? (
            <VolumeX size={16} className="animate-bounce" />
        ) : (
            <Volume2 size={16} />
        )}
    </button>
);
