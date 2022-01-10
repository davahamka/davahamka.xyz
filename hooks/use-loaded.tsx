import { useEffect, useState } from "react";
import { usePreloadState } from "~/context/PreloadContext"

export default function useLoaded() {
    const preloaded = usePreloadState();
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        if (preloaded) {
            setIsLoaded(true);
        } else {
            setTimeout(() => {
                setIsLoaded(true);
            }, 200);
        }
    }, [preloaded])

    return isLoaded
}