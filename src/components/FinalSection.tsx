import { useInView } from "../hooks/useInView";
import { BirthdayCake } from "./BirthdayCake";
import { FinalDecorativeElements } from "./FinalDecorativeElement";
import { FinalMessageCard } from "./FInalMessageCard";
import { GiftButton } from "./GiftButton";

export const FinalSection: React.FC<{ onOpenGift: () => void }> = ({ onOpenGift }) => {
    const [ref, inView] = useInView(0.3);

    return (
        <div
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative"
        >
            <div
                className="text-center space-y-6 w-full max-w-sm mx-auto"
                style={{
                    transform: inView ? 'translateY(0)' : 'translateY(40px)',
                    opacity: inView ? 1 : 0,
                    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
            >

                <BirthdayCake inView={inView} />
                <FinalMessageCard inView={inView} />
                <GiftButton inView={inView} onOpenGift={onOpenGift} />
                <FinalDecorativeElements inView={inView} />
            </div>
        </div>
    );
};
