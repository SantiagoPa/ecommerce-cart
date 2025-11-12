import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./toast/Alert"
import { Activity } from "react";
import type { StateToast } from "../context/StoreProvider";


export const Toast = ({ isActive, variant, title, description }: StateToast) => {

  return (
    <Activity mode={isActive ? "visible" : "hidden"} >
      <div className="fixed top-4 left-1/2 -translate-x-1/2 pointer-events-auto w-full max-w-sm rounded-lg border shadow-lg transition-all duration-200">
        <Alert variant={variant === 'success' ? "default" : 'destructive'}>
          {
            variant === "success" ? (
              <CheckCircle2Icon />

            ) : (<AlertCircleIcon />)
          }
          <AlertTitle>{title ? title : "Accion Exitosa!"}</AlertTitle>
          <AlertDescription>
            {description ? description : " Se ha guardado en el carrito tu producto"}
          </AlertDescription>
        </Alert>
      </div>
    </Activity>
  )
}
