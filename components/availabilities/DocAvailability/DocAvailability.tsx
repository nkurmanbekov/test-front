import { useRouter } from "next/router";
import { useCallback } from "react";
import { bookDoctor } from "../../../services/ServerService";
import { formatBookDate, formatDate } from "../../../helpers/helpers";
import { Doctor } from "../../../types/Doctor";
import AvailabilityList from "./AvailabilityList";
import { useAvailabilities } from "./useAvailabilities";

interface DocAvailabilityProps {
  doctor: Doctor;
}

export default function DocAvailability({ doctor }: DocAvailabilityProps) {
  const router = useRouter();
  const { availabilities, loading } = useAvailabilities(doctor?.id);

  const onBook = useCallback(
    async (date: string) => {
      const booking = await bookDoctor(doctor.id, {
        doctorId: doctor.id,
        date: formatBookDate(date),
      });
      if (booking) {
        router.push({
          pathname: "/bookings",
          query: {
            doctorName: doctor.name,
            date: date,
            line1: doctor.address.line1,
            line2: doctor.address.line2,
            postalCode: doctor.address.postalCode,
            city: doctor.address.city,
            country: doctor.address.country,
          },
        });
      }
    },
    [doctor, router]
  );

  return loading ? (
    <div>Loading...</div>
  ) : (
    <AvailabilityList availabilities={availabilities} onBook={onBook} />
  );
}
