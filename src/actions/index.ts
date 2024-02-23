"use server";
export async function addFormContact(formData: FormData) {
  const rawData = {
    las_name: formData.get("las_name"),
    company_email: formData.get("company_email"),
    company_size: formData.get("company_size"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };
  console.log(rawData);

  return rawData;
}
