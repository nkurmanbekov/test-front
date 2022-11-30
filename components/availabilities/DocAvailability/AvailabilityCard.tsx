import React from "react";
import { formatDate } from "../../../helpers/helpers";
import { Availability } from "../../../types/Availabilities";
import styles from "../../../styles/Availabilities.module.css";

interface AvailabilityCardProps {
  availability: Availability;
  onBook: (date: string) => void;
}

const AvailabilityCard = ({ availability, onBook }: AvailabilityCardProps) => (
  <div className={styles.availabilityCard}>
    {formatDate(availability.start)}
    <button
      className={styles.bookButton}
      onClick={() => onBook(availability.start)}
    >
      Book
    </button>
  </div>
);

export default React.memo(AvailabilityCard);
