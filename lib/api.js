export const sendContactForm = async (data) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || "An error occurred while sending the contact form."
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error in sendContactForm:", error);
    throw new Error("An error occurred while sending the contact form.");
  }
};
