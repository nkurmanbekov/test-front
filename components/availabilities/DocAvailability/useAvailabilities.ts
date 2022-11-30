import { useEffect, useState } from "react";
import { getAvailabilities } from "../../../services/ServerService";
import { Availability } from "../../../types/Availabilities";

export const useAvailabilities = (doctorId: string) => {
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    
    getAvailabilities(doctorId).then((data) => {
      setAvailabilities(data);
      setLoading(false);
    });
  }, [doctorId]);

  return { availabilities, loading };
};
