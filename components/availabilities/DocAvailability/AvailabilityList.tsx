import { Availability } from "../../../types/Availabilities";
import styles from "../../../styles/Availabilities.module.css";
import AvailabilityCard from "./AvailabilityCard";
import React from "react";

interface AvailabilityListProps {
  availabilities: Availability[];
  onBook: (date: string) => void;
}

const AvailabilitiesList = ({
  availabilities,
  onBook,
}: AvailabilityListProps) => (
  <div className={styles.availabilityList}>
    {availabilities.map((availability: Availability) => (
      <AvailabilityCard
        key={availability.start}
        availability={availability}
        onBook={onBook}
      />
    ))}
  </div>
);

export default React.memo(AvailabilitiesList);
