import { doctors } from "@/mocks/doctors";
import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

export async function getDoctor(
  id: string,
): Promise<DetailedDoctorModel | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = doctors.find((x) => x.id === id);

      if (!result) {
        return resolve(result);
      }

      resolve({
        ...result,
        experience: 29,
        mcNumber: 58549,
        about: [
          "29 سال سابقه طبابت",
          "رتبه برتر بورد تخصص از دانشگاه علوم پزشکی شهید بهشتی",
          "ویزیت آنلاین و‌ حضوری متخصص عفونی در زمینه های:",
          "مشاوره و درمان زخمهای مزمن، عروقی و زخم پای دیابتی با روش های نوین",
        ].join("\n"),
        consultations: 11995,
        membershipDuration: "4 سال و 1 ماه",
        price: 300_000,
        phone: "021-26200832",
        comments: [
          // ... همان کامنت‌ها
        ],
      });
    }, 0);
  });
}