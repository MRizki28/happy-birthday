interface DecorativeElementsProps {
    inView: boolean;
}

export const DecorativeElements: React.FC<DecorativeElementsProps> = ({ inView }) => (
    <div
        className="flex justify-center space-x-3 mb-6"
        style={{
            transform: inView ? 'scale(1)' : 'scale(0.5)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.6s ease-out 0.2s'
        }}
    >
        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
);