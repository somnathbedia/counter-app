import { selector } from "recoil";
import { countState } from "../atom/count";


export const currentState = selector({
    key: "currentState",
    get: ({ get }) => {
        const count = get(countState)
        return count
    }
})

