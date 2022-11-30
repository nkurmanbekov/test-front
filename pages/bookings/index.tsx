import Head from "next/head";
import { useRouter } from "next/router";
import { Address } from "../../types/Address";
import styles from "../../styles/Bookings.module.css";
import { BookingDoctorInformation } from "../../components/bookings/BookingDoctorInformation";

export default function Bookings() {
  const { query } = useRouter();
  const { doctorName, date, line1, line2, city, country } = query;
  const address: Address = {
    line1: line1 as string,
    line2: line2 as string,
    city: city as string,
    country: country as string,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Bookings</title>
        <meta name="description" content="Bookings page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BookingDoctorInformation
        doctorName={doctorName as string}
        address={address}
        date={date as string}
      />
    </div>
  );
}
