import React from "react";
import { Doctor } from "../../types/Doctor";
import styles from "../../styles/Availabilities.module.css";
import DoctorCard from "./DoctorCard";

interface DoctorListProps {
  doctors: Doctor[];
}

const DoctorList = ({ doctors }: DoctorListProps) => (
  <div className={styles.doctorsList}>
    {doctors.map((doctor: Doctor) => (
      <DoctorCard key={doctor.id} doctor={doctor} />
    ))}
  </div>
);

export default React.memo(DoctorList);
