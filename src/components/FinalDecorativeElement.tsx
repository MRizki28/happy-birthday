export const FinalDecorativeElements: React.FC<{ inView: boolean }> = ({ inView }) => (
    <div
        className="flex justify-center space-x-6 mt-6"
        style={{
            transform: inView ? 'scale(1)' : 'scale(0)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.6s ease-out 1.2s'
        }}
    >
        <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
    </div>
);