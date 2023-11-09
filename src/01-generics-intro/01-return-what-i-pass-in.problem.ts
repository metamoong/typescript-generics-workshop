import { Equal, Expect } from "../helpers/type-utils";

const returnWhatIPass = <T>(t: T) => {
  return t;
};

const one = returnWhatIPass(1);
const matt = returnWhatIPass("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
