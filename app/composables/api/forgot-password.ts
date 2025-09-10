import { getCsrfCookie } from "./csrf";

export interface forgotPasswordPayload {
  email: string;
}

export interface forgotPasswordResponse {
  token: string;
  user: any;
}

export interface resetPasswordPayload {
  password: string;
  token:string;
  email:string;
}

export async function forgotPassword(payload: forgotPasswordPayload){
  const runtimeConfig = useRuntimeConfig();

  try {
    await getCsrfCookie();

    const hasCsrfCookie = document.cookie.includes("XSRF-TOKEN");
    if (!hasCsrfCookie) {
      console.warn("[API] No CSRF cookie found - request may fail");
    }

    const response = await $fetch(`${runtimeConfig.public.apiBase}/api/forgot-password`, {
      method: "POST",
      body: payload,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    console.error("[API] loginUser error:", error);
    throw error;
  }
}


export async function resetPassword(payload: resetPasswordPayload){
  const runtimeConfig = useRuntimeConfig();

  try {
    await getCsrfCookie();

    const hasCsrfCookie = document.cookie.includes("XSRF-TOKEN");
    if (!hasCsrfCookie) {
      console.warn("[API] No CSRF cookie found - request may fail");
    }

    const response = await $fetch(`${runtimeConfig.public.apiBase}/api/reset-password`, {
      method: "POST",
      body: payload,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error: any) {
    console.error("[API] loginUser error:", error);
    throw error;
  }
}
