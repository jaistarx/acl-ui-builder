import { useEffect, useState } from "react";

type GeolocationOptions = {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
};

type GeolocationData = {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude?: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
  timestamp: number;
};

type useGeolocationReturnType = {
  loading: boolean;
  error?: GeolocationPositionError;
  data: GeolocationData;
};

export default function useGeolocation(
  options: GeolocationOptions | undefined = undefined
): useGeolocationReturnType {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError>();
  const [data, setData] = useState<GeolocationData>({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    timestamp: 0,
  });

  useEffect(() => {
    const successHandler = (e: GeolocationPosition) => {
      setLoading(false);
      setError(undefined);
      setData({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude,
        accuracy: e.coords.accuracy,
        altitude: e.coords.altitude || null,
        altitudeAccuracy: e.coords.altitudeAccuracy || null,
        heading: e.coords.heading || null,
        speed: e.coords.speed || null,
        timestamp: e.timestamp,
      });
    };
    const errorHandler = (e: GeolocationPositionError) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
