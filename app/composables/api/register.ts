import { getCsrfCookie } from "./csrf";
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  terms: boolean;
  sms_opt_in: boolean;
  phone: string;
  referral_code: string | null;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  try {
    await getCsrfCookie();

    const hasCsrfCookie = document.cookie.includes("XSRF-TOKEN");
    if (!hasCsrfCookie) {
      console.warn("[API] No CSRF cookie found - request may fail");
    }

    const response = await $fetch("https://leads.vipservices.biz/register", {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return { success: true, data: response };
  } catch (error: any) {
    console.error("Register API error:", error);
    return { success: false, message: error?.data?.message || error.message };
  }
}
