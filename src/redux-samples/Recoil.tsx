import { atom } from "recoil";

const age = atom({
  key: "age", 
  default: 0  // default global value for age key
});

export const AgeCalculator = () => {
    const [ageState, setAge] = useRecoilState(age);
    }