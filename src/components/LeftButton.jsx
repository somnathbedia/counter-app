import { useSetRecoilState } from "recoil"
import { countState } from "../store/atom/count"


function LeftButton() {
    const setCount = useSetRecoilState(countState)
  return (
    <div>
          <button onClick={() => {
              setCount((prevC) =>
                  prevC - 1
            )
      }}>Decrement</button>
    </div>
  )
}

export default LeftButton
