import useStore from "@/store"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Slider } from "../ui/slider"

export default function PaddingSlider() {
  const padding = useStore((state) => state.padding)

  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-neutral-400">
        Padding : {padding}
      </label>
      <Slider
        className="w-44 my-5"
        value={[padding]}
        onValueChange={([padding]) => useStore.setState({ padding })}
        max={128}
        step={8}
        style={{cursor:"pointer"}}
      />
      
      {/* <Input 
       type="number"
       className="!dark w-16 bg-transparent"
       min={8}
       max={128}
       value={[padding]}
      //  onValueChange={([padding]) => useStore.setState({ padding })}
       onChange={(e) =>
        useStore.setState({ padding: Number(e.target.value) })
      }
      /> */}


     
    </div>
  )
}