import { getCsrfCookie } from "./csrf";

export async function getUser() {
  const runtimeConfig = useRuntimeConfig()
  try {
    await getCsrfCookie();

    const hasCsrfCookie = document.cookie.includes("XSRF-TOKEN");
    if (!hasCsrfCookie) {
      console.warn("[API] No CSRF cookie found - request may fail");
    }

    const response = await $fetch(`${runtimeConfig.public.apiBase}/api/user`);

    return { success: true, data: response};
  } catch (error: any) {
    console.error("Register API error:", error);
    return { success: false, message: error?.data?.message || error.message };
  }
}
