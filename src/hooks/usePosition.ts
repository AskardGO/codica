import React from 'react';

const defaultSettings = {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0,
};

interface Props extends Coords{
    timestamp: number
}

type Coords = {
    latitude: number,
    longitude: number,
    accuracy: number,
    speed: number,
    heading: number
}

export const usePosition = (watch = false, userSettings = {}) => {
    const settings = {
        ...defaultSettings,
        ...userSettings,
    };

    const [position, setPosition] = React.useState<any>();
    const [error, setError] = React.useState<string | null>(null);

    const onChange = ({coords, timestamp}:any) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
            accuracy: coords.accuracy,
            speed: coords.speed,
            heading: coords.heading,
            timestamp,
        });
    };

    const onError = (error: {message: string}) => {
        setError(error.message);
    };

    React.useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError('Geolocation is not supported');
            return;
        }

        if (watch) {
            const watcher =
                navigator.geolocation.watchPosition(onChange, onError, settings);
            return () => navigator.geolocation.clearWatch(watcher);
        }

        navigator.geolocation.getCurrentPosition(onChange, onError, settings);
    }, [
        settings.enableHighAccuracy,
        settings.timeout,
        settings.maximumAge,
    ]);

    return {...position, error};
};