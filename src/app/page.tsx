import { cloneOrUpdateRepo } from "~/lib/pull-repo";
import Terminal from "./components/Terminal";
export default async function HomePage() {
   cloneOrUpdateRepo()

  return (
    <div className="p-4  w-screen h-screen">
      <Terminal/>

    </div>
  )
   
}
