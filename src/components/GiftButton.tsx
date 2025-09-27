import { Gift } from "lucide-react";

interface GiftButtonProps {
    inView: boolean;
    onOpenGift: () => void;
}

export const GiftButton: React.FC<GiftButtonProps> = ({ inView, onOpenGift }) => (
    <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 rounded-full blur-lg opacity-30 group-active:opacity-50 transition-opacity"></div>
        <button
            onClick={onOpenGift}
            className="relative group bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 active:from-yellow-600 active:via-pink-600 active:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform active:scale-105 transition-all duration-200 text-base border border-white/20 touch-manipulation"
            style={{
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.8)',
                opacity: inView ? 1 : 0,
                transition: 'all 0.8s ease-out 1s',
                animation: inView ? 'giftPulse 3s infinite 1.5s' : 'none'
            }}
        >
            <Gift className="mr-2 group-active:animate-spin" size={20} />
            🎁 Buka Kado Spesial! 🎁
        </button>
    </div>
);