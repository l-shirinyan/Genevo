import type { FormState, ResetFormOpts } from "vee-validate";
import { getCsrfCookie } from "./csrf";
import { useRouter } from "vue-router";

export interface RegisterResponse {
  success: boolean;
  message?: string;
  data?: any;
}

type userDataForm = {
  first_name: string;
  last_name: string;
  phone: string;
  country: string;
  redirect_url: string;
};

type resetFormFunc = (
  state?:
    | Partial<
        FormState<{
          fullName?: string | undefined;
          email?: string | undefined;
          password?: string | undefined;
        }>
      >
    | undefined,
  opts?: Partial<ResetFormOpts>
) => void;

export async function cognitoStartVerification(
  token: string,
  userData: userDataForm,
  resetForm: resetFormFunc,
  goHome:() => void
): Promise<RegisterResponse> {
  const runtimeConfig = useRuntimeConfig();
  const toast = useToast();
  const router = useRouter();
  const appToken = useCookie("token");
  try {
    await getCsrfCookie();

    const hasCsrfCookie = document.cookie.includes("XSRF-TOKEN");
    if (!hasCsrfCookie) {
      console.warn("[API] No CSRF cookie found - request may fail");
    }

    const response = await fetch(
      `${runtimeConfig.public.apiBase}/api/verification/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const data = await response.json();
    let popup: Window | null = window.open("", "_blank");

    const isSafari =
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


    if (data.session_url) {
      if (popup) {
        popup.location.href = data.session_url;
      } else if (isSafari) {
        window.location.href = data.session_url;
      } else {
        window.open(data.session_url, "_blank");
      }

      const interval = setInterval(async () => {
        const check = await fetch(
          `${runtimeConfig.public.apiBase}/api/verification/status`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const status = await check.json();
        if (status?.verified || status?.data?.status === "success") {
          clearInterval(interval);
          toast.success({
            title: "Verification Complete",
            message: "Your account has been successfully verified.",
          });
          if (popup && !popup.closed) popup.close();
          goHome();
        } else if (status?.failed || status?.data?.status === "failed") {
          appToken.value = null;
          if (popup && !popup.closed) popup.close();
          clearInterval(interval);
          toast.error({
            title: "Verification Failed",
            message: "We couldn’t complete the verification. Please try again.",
          });
          resetForm();
        }
        else if (popup && popup.closed) {
          clearInterval(interval);
          toast.error({
            title: "Verification Cancelled",
            message: "You closed the verification before finishing.",
          });
          resetForm();
        }
      }, 5000);
    }

    return { success: true, data: response };
  } catch (error: any) {
    console.error("Register API error:", error);
    return { success: false, message: error?.data?.message || error.message };
  }
}
