import { formatDate } from "../../helpers/helpers";
import { Address } from "../../types/Address";
import styles from "../../styles/Bookings.module.css";

export interface DoctorInfoProps {
  doctorName: string;
  date: string;
  address: Address;
}

export const BookingDoctorInformation = ({
  doctorName,
  date,
  address,
}: DoctorInfoProps) => (
  <main className={styles.main}>
    <div className={styles.message}>Your booking request is sent</div>
    <div>
      <b>Doctor</b>: {doctorName}
    </div>
    <div>
      <b>Date</b>: {formatDate(date)}
    </div>
    <div>
      <b>Address</b>:{" "}
      {`${address.line1} ${address.line2} ${address.country} ${address.city}`}
    </div>
  </main>
);
