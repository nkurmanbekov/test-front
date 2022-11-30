import Head from "next/head";
import DoctorList from "../../components/availabilities/DoctorList";
import { useDoctors } from "../../components/availabilities/useDoctors";
import styles from "../../styles/Availabilities.module.css";

export default function Availabilities() {
  const { doctors, loading } = useDoctors();

  return (
    <div>
      <Head>
        <title>Doctors</title>
        <meta
          name="description"
          content="Doctors list and availabilities page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className={styles.pageHeader}>Doctors</h2>
        {loading ? <div>Loading...</div> : <DoctorList doctors={doctors} />}
      </main>
    </div>
  );
}
