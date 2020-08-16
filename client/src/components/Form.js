import React, {useState} from 'react'
import '../styles/Form.css'
import { useForm } from '../hooks/form'
import VehicleDetails from './VehicleDetails'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';





function Form(e){
// setFormInput will update the state
const [form, setFormInput, resetForm] = useForm({
    first: '',
    last: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    zip: '',


})
console.log(form)



function handleSubmit(e){
    e.preventDefault()
    // resetForm()
    console.log(form)
}
    return(<div className="Form">
        <div className="formContainer">
        
        <h1 className="storyHeader">SHARE YOUR STORY</h1>
        <h3 className="makeOverHeader">Chevy Chevelle Make-Over</h3>
        
            <div className="personalDetails">
                <form onSubmit={handleSubmit} className="formDetails">
                    {form.first}
                    <h1 className="personalHeader">Personal Information</h1>
                    <div className="personalDetailsRowOne">
                        <TextField
                            required
                            name="first"
                            id="first"
                            label="First"
                            defaultValue="GLEN"
                            onChange={setFormInput}
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="last"
                            label="Last"
                            defaultValue="LENNER"
                            name="last"
                            onChange={setFormInput}
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="email"
                            label="Email"
                            defaultValue="GET-GLEN@GMAIL.COM"
                            name="email"
                            onChange={setFormInput}
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="phone"
                            label="Phone Number"
                            defaultValue="702-877-1500"
                            name="phone"
                            onChange={setFormInput}
                            variant="outlined"
                        />
                        </div>
                        {form.state}
                    <div className='personalDetailsRowTwo'>
                        <FormControl className="dropDowns">
                            <InputLabel>State</InputLabel>
                            {form.city}
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="state"
                                name="state"
                                onChange={setFormInput}
                    >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='NV'>NV</MenuItem>
                                <MenuItem value='CA'>CA</MenuItem>
                                <MenuItem value='NY'>NY</MenuItem>
                            </Select>  
                        </FormControl>
                        <FormControl className="dropDowns">
                            <InputLabel>City</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="city"
                                name="city"
                                onChange={setFormInput}
                               
                    >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='LV'>LV</MenuItem>
                                <MenuItem value='LA'>LA</MenuItem>
                                <MenuItem value='NYC'>NYC</MenuItem>
                            </Select>  
                        </FormControl>
                        <TextField
                            required
                            id="zip"
                            label="zip"
                            defaultValue="89166"
                            onChange={setFormInput}
                            name="zip"
                            variant="outlined"
                        />
                    </div>
                    
                    <VehicleDetails manageForm={() => {
                        setFormInput()
                    }}/>
                    <div className="submitButton">
                    <button type="submit">
                        SUBMIT
                    </button>
                    </div>
                </form>
                

            

            </div>
        </div>




    </div>


    )
}

export default Form