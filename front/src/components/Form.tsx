import { TextField } from "@mui/material"
import { useForm } from "react-hook-form"

function Form() {
    const {
        handleSubmit,
        formState: { errors },
        control,
        register
    } = useForm()

    return (
        <div>
<TextField {...register("")}/>
        </div>
    )
}

export default Form
