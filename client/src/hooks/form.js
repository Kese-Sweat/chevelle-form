import { useState } from 'react'

export function useForm(formData) {
    const obj = formData || {} // if formData is undefined than it will make it an empty obj
    const [form, setForm] = useState(obj)

    function handleForm(e) {
        return setForm({...form, [e.target.name]: e.target.value})
    }
    function resetForm(e){
        setForm(obj)
    }
    function setFormTo(o){
        setForm(o)
    }
    return [form, handleForm, resetForm, setFormTo]
}