export const FinalMessageCard: React.FC<{ inView: boolean }> = ({ inView }) => (
    <div
        className="relative group"
        style={{
            transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
            opacity: inView ? 1 : 0,
            transition: 'all 0.8s ease-out 0.6s'
        }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl blur-sm opacity-20 group-active:opacity-30 transition-opacity"></div>

        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
                🎉 Happy Birthday My Love! 🎉
            </h3>
            <p className="text-white/90 text-base font-light leading-relaxed">
                Terima kasih sudah menjadi bagian terpenting dalam hidupku.
                Sekarang saatnya untuk surprise terakhir...
            </p>
        </div>
    </div>
);