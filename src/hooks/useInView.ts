import { useEffect, useState } from "react";

export const useInView = (threshold: number = 0.3): [React.Dispatch<React.SetStateAction<HTMLDivElement | null>>, boolean] => {
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [inView, setInView] = useState<boolean>(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold }
        );

        observer.observe(ref);

        return () => observer.disconnect();
    }, [ref, threshold]);

    return [setRef, inView];
};
