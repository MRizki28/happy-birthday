import { useEffect, useRef, useState } from "react";
import type { Firework, Heart } from "../types";
import FireworkUtil from "../utils/FireworkUtil";
import HeartUtil from "../utils/HeartUtil";
import ViewportUtil from "../utils/ViewportUtil";
import { BackgroundHearts } from "../components/BackgroundHeart";
import { Gift } from "lucide-react";
import { MessageSection } from "../components/MessageSection";
import { FinalSection } from "../components/FinalSection";
import { VideoModal } from "../components/VideoModal";
import { FireworksAnimation } from "../components/FireworkAnimation";
import { messages } from "../data/Message";
import song from '../assets/song.mp3';
import song2 from '../assets/song2.mp3';
import video from '../assets/video.mp4';

export default function BirthdayWebsite() {
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [hearts, setHearts] = useState<Heart[]>([]);
    const [showFireworks, setShowFireworks] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const [fireworks, setFireworks] = useState<Firework[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const videoUrl: string = video;
    const playList = [song, song2];

    const startCelebration = (): void => {
        setShowMessage(true);

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const musicUrl = playList[Math.floor(Math.random() * playList.length)];

        audioRef.current = new Audio(musicUrl);
        audioRef.current.loop = true;
        audioRef.current.play().catch(e => console.log(e));
    };

    const openGift = (): void => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        setShowFireworks(true);
        setFireworks(FireworkUtil.generateFireworks());

        setTimeout(() => {
            setShowVideo(true);
        }, 3000);
    };

    const closeVideo = (): void => {
        setShowVideo(false);
        setShowFireworks(false);
    };

    useEffect(() => {
        setHearts(HeartUtil.generateHearts());
        ViewportUtil.setupMobileViewport();
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
                .animate-fade-in { animation: fade-in 1.2s ease-out; }
            `}</style>
        </div>
    );
}
