interface BirthdayCakeProps {
  inView: boolean;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ inView }) => (
  <div 
    className="mb-6"
    style={{
      transform: inView ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-10deg)',
      transition: 'all 0.8s ease-out 0.2s'
    }}
  >
    <div className="text-6xl mb-4 animate-bounce">🎂</div>
    <div className="flex justify-center space-x-2">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-8 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full shadow-lg relative"
          style={{
            animation: inView ? `candleFlame 1.5s infinite ${i * 0.3}s` : 'none',
            transform: inView ? 'scaleY(1)' : 'scaleY(0)',
            transition: `transform 0.5s ease-out ${0.4 + i * 0.1}s`
          }}
        >
          <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
);
