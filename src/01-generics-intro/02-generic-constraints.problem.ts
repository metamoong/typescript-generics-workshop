/*
export const returnWhatIPassIn = (t: string) => t;
-> test1에서 "a"리터럴 타입이 되도록 해야 하므로 안됨
-> type test1 = Expect<Equal<typeof a, string>>; 으로 바꾸면 된다
*/

import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export const returnWhatIPassIn = <T extends string>(t: T) => t;

it("Should ONLY allow strings to be passed in", () => {
  const a = returnWhatIPassIn("a");

  type test1 = Expect<Equal<typeof a, "a">>; // "a" 리터럴 타입

  // @ts-expect-error
  returnWhatIPassIn(1);

  // @ts-expect-error
  returnWhatIPassIn(true);

  // @ts-expect-error
  returnWhatIPassIn({
    foo: "bar",
  });
});
