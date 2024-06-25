import React from "react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

interface LoadImage {
    className?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

const LoadImage = ({ className, src, width, height, alt }: LoadImage) => {
    return (
        <>
            {src ? (
                <Image
                    src={src}
                    width={width}
                    height={height}
                    quality={80}
                    loading='lazy'
                    alt={alt}
                    className={cn("", className)}
                />
            ) : (
                <Skeleton
                    className={`rounded-full`}
                    style={{
                        width: width + "px",
                        height: height + "px",
                    }}
                />
            )}
        </>
    );
};

export default LoadImage;
