export const dataToRequestBody = (data: any) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]: any) =>  formData.append(key, value));

  return formData
}