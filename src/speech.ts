export const speakText = (
    text: string,
    subtext: string,
    messageId: number,
    isSpeaking: boolean,
    currentSpeakingId: number | null,
    setIsSpeaking: (val: boolean) => void,
    setCurrentSpeakingId: (id: number | null) => void
) => {
    if (isSpeaking && currentSpeakingId === messageId) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setCurrentSpeakingId(null);
        return;
    }

    window.speechSynthesis.cancel();
    const fullText = `${text}. ${subtext}`;
    const utterance = new SpeechSynthesisUtterance(fullText);

    utterance.rate = 0.8;
    utterance.pitch = 1.1;
    utterance.volume = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
        (voice) =>
            voice.name.toLowerCase().includes("female") ||
            voice.name.toLowerCase().includes("woman") ||
            voice.lang.includes("id")
    );
    if (femaleVoice) utterance.voice = femaleVoice;

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
};
