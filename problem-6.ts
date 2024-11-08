interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(obj: Profile, update: Partial<Profile>): Profile {
  return {
    ...obj,
    ...update,
  };
}

