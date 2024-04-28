interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Configurations {
  apiUrl: string;
}

// Type guard to check if window.configs is of type Configurations
function hasConfigurations(obj: any): obj is { configs: Configurations } {
  return obj && obj.configs && typeof obj.configs.apiUrl === "string";
}

// Get the API URL from the window.configs, with a fallback to "/"
const apiUrl = hasConfigurations(window) ? window.configs.apiUrl : "/";

export async function submitFormData(formData: FormData): Promise<boolean> {
  // Here we use the `apiUrl` obtained through the type guard above
  const endpoint = `${apiUrl}0f55ae80-8bdd-4d91-9fbf-a7b5db1be7f3-prod.e1-us-cdp-2.choreoapis.dev/impreza/impreza-back-end/simple-image-and-form-submission-api-197/v1.0`;
  console.log(endpoint);
  try {
    const response = await fetch(endpoint, {
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
