interface DateSectionProps {
    inView: boolean;
}

export const DateSection: React.FC<DateSectionProps> = ({ inView }) => (
    <div
        className="mt-6 relative group inline-block"
        style={{
            transform: inView ? 'scale(1)' : 'scale(0.8)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.6s ease-out 0.8s'
        }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur opacity-30 group-active:opacity-50 transition-opacity"></div>
        <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-xl text-sm">
            🗓️ 16 November 2024 🗓️
        </div>
    </div>
);