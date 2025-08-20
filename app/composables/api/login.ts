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
  console.log('[API] loginUser called with payload:', payload);

  try {
    const response = await $fetch<LoginResponse>('https://leads.vipservices.biz/login', {
      method: 'POST',
      body: payload,
    });

    console.log('[API] loginUser success:', response);
    return response;
  } catch (error: any) {
    console.error('[API] loginUser error:', error);
    throw error;
  }
}
