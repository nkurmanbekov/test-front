import styles from "../../styles/Availabilities.module.css";
import DocAvailability from "./DocAvailability/DocAvailability";
import { Doctor } from "../../types/Doctor";
import React, { useCallback, useState } from "react";

interface DoctorCardProps {
  doctor: Doctor;
}

function DoctorCard({ doctor }: DoctorCardProps) {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = useCallback(() => {
    setShow(!show);
  }, [show]);
  return (
    <div className={styles.doctorCard}>
      <div className={styles.doctorCardHeader}>
        <div>{doctor.name}</div>
        <div onClick={toggleShow} className={styles.availabilitiesToggler}>
          {show ? "- Hide " : "+ Show "} availabilities
        </div>
      </div>
      {show && <DocAvailability doctor={doctor} />}
    </div>
  );
}

export default React.memo(DoctorCard);
