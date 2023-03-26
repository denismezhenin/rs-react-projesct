export const VALIDATION = {
  firstName: [
    {
      isValid: (value: string) => !!value,
      message: "Is required.",
    },
    {
      isValid: (value: string) => /^[a-z ,.'-]+$/i.test(value),
      message: "Needs to be an email.",
    },
  ],
  secondName: [
    {
      isValid: (value: string) => !!value,
      message: "Is required.",
    },
    {
      isValid: (value: string) => /^[a-z ,.'-]+$/i.test(value),
      message: "Needs to be an email.",
    },
  ],
  birthday: [
    {
      isValid: (value: string) => !!value,
      message: "Is required.",
    },
  ],
  country: [
    {
      isValid: (value: string) => !!value,
      message: "Is required.",
    },
  ],
  sex: [
    {
      isValid: (value: string) => !!value,
      message: "Is required.",
    },
  ],
  image: [
    {
      isValid: (value: string) => !!value,
      message: "Is required.",
    },
  ],
};
