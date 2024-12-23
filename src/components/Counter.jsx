import { useRecoilValue } from "recoil"
import { currentState } from "../store/selector/count"


export default function Counter() {
    const count = useRecoilValue(currentState)
  return (
    <div>
          <p style={{fontFamily:"sans-serif"}}>{count}</p>
    </div>
  )
}
