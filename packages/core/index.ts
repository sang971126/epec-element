import { makeInstaller } from "@epec-element/utils"
import components from "./components"
import "@epec-element/theme/index.css"

const installer = makeInstaller(components)

export * from "@epec-element/components"
export default installer