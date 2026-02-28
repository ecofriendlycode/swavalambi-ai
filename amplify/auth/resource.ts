import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    phone: true,
  },
  userAttributes: {
    phoneNumber: {
      required: true,
      mutable: true,
    },
    name: {
      required: true,
      mutable: true,
    },
  },
});
