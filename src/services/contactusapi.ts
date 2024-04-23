interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function submitFormData(formData: FormData): Promise<boolean> {
  try {
    const response = await fetch("http://localhost:3000/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Failed to submit form data:", error);
    return false;
  }
}
