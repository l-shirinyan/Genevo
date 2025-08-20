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
    const response = await $fetch('https://leads.vipservices.biz/register', {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return { success: true, data: response };
  } catch (error: any) {
    console.error('Register API error:', error);
    return { success: false, message: error?.data?.message || error.message };
  }
}
