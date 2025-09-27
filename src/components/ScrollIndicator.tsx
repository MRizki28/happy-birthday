interface ScrollIndicatorProps {
  inView: boolean;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ inView }) => (
  <div 
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
    style={{
      opacity: inView ? 0.7 : 0,
      transition: 'opacity 0.5s ease-in-out 1s'
    }}
  >
    <div className="relative">
      <div className="w-5 h-8 border-2 border-white/30 rounded-full">
        <div className="w-0.5 h-2 bg-white/60 rounded-full mx-auto mt-1.5 animate-bounce"></div>
      </div>
    </div>
  </div>
);
