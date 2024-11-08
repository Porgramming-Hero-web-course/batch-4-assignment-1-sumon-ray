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

const myProfile = {
  name: "sumon",
  age: 20,
  email: "abc@gmail.com",
};
const getResult = updateProfile(myProfile, { age: 51 });
// console.log(getResult)
