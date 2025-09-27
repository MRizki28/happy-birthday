import { useEffect, useState } from "react";
import type { Firework, Heart, Message } from "../types";
import FireworkUtil from "../utils/FireworkUtil";
import HeartUtil from "../utils/HeartUtil";
import ViewportUtil from "../utils/ViewportUtil";
import { BackgroundHearts } from "../components/BackgroundHeart";
import { Gift } from "lucide-react";
import { MessageSection } from "../components/MessageSection";
import { FinalSection } from "../components/FinalSection";
import { VideoModal } from "../components/VideoModal";
import { FireworksAnimation } from "../components/FireworkAnimation";

export default function BirthdayWebsite() {
    // State Management
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [hearts, setHearts] = useState<Heart[]>([]);
    const [showFireworks, setShowFireworks] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const [fireworks, setFireworks] = useState<Firework[]>([]);
    const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
    const [currentSpeakingId, setCurrentSpeakingId] = useState<number | null>(null);

    // Constants
    const messages: Message[] = [
        {
            id: 1,
            text: "Selamat Ulang Tahun Sayang! 🎉",
            subtext: "Hari yang paling ditunggu telah tiba"
        },
        {
            id: 2,
            text: "Semoga hari spesialmu penuh kebahagiaan",
            subtext: "Dan dipenuhi dengan senyuman terindah"
        },
        {
            id: 3,
            text: "Kamu adalah hadiah terindah dalam hidupku",
            subtext: "Yang membuat setiap hari menjadi istimewa"
        },
        {
            id: 4,
            text: "Selamat menambah usia yang baru! ❤️",
            subtext: "Semoga menjadi tahun yang penuh berkah"
        },
        {
            id: 5,
            text: "Semoga semua impianmu menjadi kenyataan",
            subtext: "Dan semua doa-doamu dikabulkan"
        },
        {
            id: 6,
            text: "I Love You So Much! 💕",
            subtext: "Cinta ini akan terus tumbuh seiring waktu"
        }
    ];

    const videoUrl: string = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

    // Event Handlers
    const startCelebration = (): void => {
        setShowMessage(true);
    };

    const openGift = (): void => {
        setShowFireworks(true);
        setFireworks(FireworkUtil.generateFireworks());

        setTimeout(() => {
            setShowVideo(true);
        }, 3000);
    };

    const closeVideo = (): void => {
        setShowVideo(false);
        setShowFireworks(false);
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setCurrentSpeakingId(null);
    };

    // Effects
    useEffect(() => {
        setHearts(HeartUtil.generateHearts());
        ViewportUtil.setupMobileViewport();

        // Load voices for speech synthesis
        if ('speechSynthesis' in window) {
            window.speechSynthesis.getVoices();
        }
    }, []);

    return (
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative min-h-screen overflow-x-hidden">
            <BackgroundHearts hearts={hearts} />

            {!showMessage ? (
                <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-10">
                    <div className="text-center space-y-6 animate-fade-in max-w-sm mx-auto">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                            <div className="absolute -top-6 -right-6 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
                                🎂 SURPRISE! 🎂
                            </h1>
                        </div>

                        <div className="text-white/90 text-lg mb-8 font-light">
                            Ada yang spesial menunggumu hari ini...
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-lg opacity-30 group-active:opacity-50 transition-opacity"></div>
                            <button
                                onClick={startCelebration}
                                className="relative group bg-gradient-to-r from-pink-500 to-red-500 active:from-pink-600 active:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform active:scale-105 transition-all duration-200 animate-bounce border border-white/20 touch-manipulation"
                            >
                                <Gift className="inline-block mr-2 group-active:animate-spin" size={24} />
                                Buka Kejutan!
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative z-10">
                    {messages.map((message, index) => (
                        <MessageSection
                            key={message.id}
                            message={message}
                            index={index}
                            isSpeaking={isSpeaking}
                            currentSpeakingId={currentSpeakingId}
                            setIsSpeaking={setIsSpeaking}
                            setCurrentSpeakingId={setCurrentSpeakingId}
                        />
                    ))}
                    <FinalSection onOpenGift={openGift} />
                </div>
            )}

            <FireworksAnimation fireworks={fireworks} showFireworks={showFireworks} />
            <VideoModal showVideo={showVideo} onClose={closeVideo} videoUrl={videoUrl} />

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes heartFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(-8px) rotate(-5deg); }
          75% { transform: translateY(-12px) rotate(3deg); }
        }
        
        @keyframes candleFlame {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(1.1) scaleX(0.9); }
        }
        
        @keyframes giftPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          overflow-x: hidden;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Prevent zoom on inputs */
        input, select, textarea {
          font-size: 16px;
        }
      `}</style>
        </div>
    );
};
