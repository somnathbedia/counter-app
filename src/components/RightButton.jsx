import { useSetRecoilState } from "recoil"
import { countState } from "../store/atom/count"


function RightButton() {
    const setCount = useSetRecoilState(countState)
  return (
    <div>
      <button onClick={() => {
              setCount((prevc)=> prevc+1)
      }}>Increment</button>
    </div>
  )
}

export default RightButton
