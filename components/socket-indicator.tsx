"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if (!isConnected) {
        return (
            <Badge
                variant="outline"
                className="bg-orange-600 text-white border-none"
            >
                Fallback: Polling every 1s
            </Badge>
        );
    }

    return (
        <Badge
            variant="outline"
            className="bg-green-600 text-white border-none"
        >
            Live: Real-time updates
        </Badge>
    );
};