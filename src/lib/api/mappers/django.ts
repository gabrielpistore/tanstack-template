// Django field mapping utilities
import type { RegisterData, User } from "@/lib/api/types";

/**
 * Maps Django user fields to frontend User interface
 */
export function mapDjangoUserToFrontend(djangoUser: any): User {
  return {
    id: djangoUser.id,
    email: djangoUser.email,
    firstName: djangoUser.first_name || "",
    lastName: djangoUser.last_name || "",
    avatar: djangoUser.avatar || null,
    isActive: djangoUser.is_active ?? true,
    createdAt: djangoUser.date_joined || new Date().toISOString(),
    updatedAt: djangoUser.last_login || new Date().toISOString(),
  };
}

/**
 * Maps frontend User interface to Django user fields
 */
export function mapFrontendUserToDjango(frontendUser: Partial<User>): any {
  const djangoUser: any = {};

  if (frontendUser.email !== undefined) djangoUser.email = frontendUser.email;
  if (frontendUser.firstName !== undefined)
    djangoUser.first_name = frontendUser.firstName;
  if (frontendUser.lastName !== undefined)
    djangoUser.last_name = frontendUser.lastName;
  if (frontendUser.avatar !== undefined)
    djangoUser.avatar = frontendUser.avatar;
  if (frontendUser.isActive !== undefined)
    djangoUser.is_active = frontendUser.isActive;

  return djangoUser;
}

/**
 * Maps frontend RegisterData to Django registration format
 */
export function mapRegisterDataToDjango(registerData: RegisterData): any {
  return {
    email: registerData.email,
    password1: registerData.password,
    password2: registerData.password,
    first_name: registerData.firstName,
    last_name: registerData.lastName,
  };
}

/**
 * Maps Django login response to frontend AuthResponse format
 */
export function mapDjangoLoginResponse(djangoResponse: any): any {
  // The user data can be in different places depending on Django setup
  let userData = djangoResponse;

  // If tokens exist and contain user data, use that
  if (djangoResponse.tokens && djangoResponse.tokens.user) {
    userData = djangoResponse.tokens.user;
  }

  return {
    data: mapDjangoUserToFrontend(userData),
    tokens: djangoResponse.tokens,
    success: true,
    status: 200,
  };
}

/**
 * Maps Django validation errors to frontend format
 */
export function mapDjangoValidationErrors(
  djangoErrors: any
): Record<string, string[]> {
  const mappedErrors: Record<string, string[]> = {};

  Object.keys(djangoErrors).forEach((field) => {
    let frontendField = field;

    // Map Django field names to frontend field names
    switch (field) {
      case "first_name":
        frontendField = "firstName";
        break;
      case "last_name":
        frontendField = "lastName";
        break;
      case "password1":
      case "password2":
        frontendField = "password";
        break;
      case "non_field_errors":
        frontendField = "general";
        break;
    }

    if (Array.isArray(djangoErrors[field])) {
      mappedErrors[frontendField] = djangoErrors[field];
    } else {
      mappedErrors[frontendField] = [djangoErrors[field]];
    }
  });

  return mappedErrors;
}
