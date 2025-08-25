/**
 * Utility function to get CSRF cookie from Laravel Sanctum
 * Must be called before making any authenticated requests
 */
export async function getCsrfCookie(): Promise<void> {
  try {
    console.log("[API] Requesting CSRF cookie...");

    const response = await fetch("https://leads.vipservices.biz/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      console.log("[API] CSRF cookie obtained successfully");

      const cookies = document.cookie;
      const hasCsrfCookie = cookies.includes("XSRF-TOKEN");

      if (hasCsrfCookie) {
        console.log("[API] CSRF cookie found in browser storage");
      } else {
        console.warn("[API] CSRF cookie not found in browser storage - CORS issue possible");
      }
    } else {
      console.warn(`[API] CSRF cookie request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.warn("[API] CSRF cookie request failed, continuing without CSRF:", error);
  }
}
