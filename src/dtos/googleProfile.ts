interface GoogleProfile {
  id: string;
  displayName: string;
  familyName: string;
  givenName: string;
  emails: { value: string }[];
  photos: { value: string }[];
  email: string;
  picture: string;
  verified_email: boolean;
}
