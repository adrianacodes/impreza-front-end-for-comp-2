interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function submitFormData(formData: FormData): Promise<boolean> {
  try {
    const response = await fetch("https://0f55ae80-8bdd-4d91-9fbf-a7b5db1be7f3-prod.e1-us-cdp-2.choreoapis.dev/impreza/impreza-back-end/simple-image-and-form-submission-api-197/v1.0", {
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
