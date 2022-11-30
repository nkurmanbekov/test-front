import { useEffect, useState } from "react";
import { getDoctors } from "../../services/ServerService";
import { Doctor } from "../../types/Doctor";

export const useDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    
    getDoctors().then((data) => {
      setDoctors(data);
      setLoading(false);
    });
  }, []);

  return { doctors, loading };
};
