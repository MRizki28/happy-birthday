import { X } from "lucide-react";

interface VideoModalProps {
    showVideo: boolean;
    onClose: () => void;
    videoUrl: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ showVideo, onClose, videoUrl }) => {
    if (!showVideo) return null;

    return (
        <div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{
                animation: 'fadeIn 0.5s ease-out'
            }}
        >
            <div
                className="relative w-full max-w-sm mx-auto"
                style={{
                    animation: 'scaleIn 0.6s ease-out'
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 z-10 bg-white/20 active:bg-white/40 text-white p-2.5 rounded-full transition-all shadow-xl border border-white/20 touch-manipulation"
                >
                    <X size={20} />
                </button>

                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            🎬 Video Spesial Untukmu!
                        </h2>
                        <p className="text-white/80 text-base font-light">
                            Surprise terakhir yang sudah disiapkan dengan cinta ❤️
                        </p>
                    </div>

                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-6">
                        <video
                            className="w-full h-48 object-cover"
                            controls
                            autoPlay
                            poster="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400"
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Browser Anda tidak mendukung video HTML5.
                        </video>
                    </div>

                    <div className="text-center">
                        <div className="relative group inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-active:opacity-50 transition-opacity"></div>
                            <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-xl border border-white/20 text-sm">
                                💕 Happy Birthday My Love! 💕
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};