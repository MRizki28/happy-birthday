export default class SpeechUtil {
    static speakText(
        text: string,
        subtext: string,
        messageId: number,
        isSpeaking: boolean,
        currentSpeakingId: number | null,
        setIsSpeaking: (value: boolean) => void,
        setCurrentSpeakingId: (value: number | null) => void
    ): void {
        if (isSpeaking && currentSpeakingId === messageId) {
            // Stop speaking
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            setCurrentSpeakingId(null);
            return;
        }

        // Stop any current speech
        window.speechSynthesis.cancel();

        const fullText = `${text}. ${subtext}`;
        const utterance = new SpeechSynthesisUtterance(fullText);

        // Configure voice settings
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        utterance.volume = 0.9;

        // Try to use a female voice if available
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice = voices.find(voice =>
            voice.name.toLowerCase().includes('female') ||
            voice.name.toLowerCase().includes('woman') ||
            voice.lang.includes('id') // Indonesian voice if available
        );
        if (femaleVoice) {
            utterance.voice = femaleVoice;
        }

        utterance.onstart = () => {
            setIsSpeaking(true);
            setCurrentSpeakingId(messageId);
        };

        utterance.onend = () => {
            setIsSpeaking(false);
            setCurrentSpeakingId(null);
        };

        utterance.onerror = () => {
            setIsSpeaking(false);
            setCurrentSpeakingId(null);
        };

        window.speechSynthesis.speak(utterance);
    }
}
