import { getCsrfCookie } from "./csrf";

export interface LoginPayload {
  email: string;
  password: string;
  remember: string;
}

export interface LoginResponse {
  token: string;
  user: any;
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  const runtimeConfig = useRuntimeConfig();
  const router = useRouter();
  const tokenCookie = useCookie("token");

  try {
    await getCsrfCookie();

    const hasCsrfCookie = document.cookie.includes("XSRF-TOKEN");
    if (!hasCsrfCookie) {
      console.warn("[API] No CSRF cookie found - request may fail");
    }

    const response = await $fetch<LoginResponse>(`${runtimeConfig.public.apiBase}/api/login`, {
      method: "POST",
      body: payload,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.token) {
      tokenCookie.value = response.token;
      router.push("/");
    }

    return response;
  } catch (error: any) {
    console.error("[API] loginUser error:", error);
    throw error;
  }
}
