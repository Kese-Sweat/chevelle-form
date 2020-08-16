import React from 'react'
import '../styles/VehicleDetails.css'
import {useForm} from '../hooks/form'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


function VehicleDetails(props){
    const [form, setFormInput] = useForm({
        chevelle: '',
        year: '',
        color: '',
        miles: '',
        transmission: '',
        air: '',
        engine: '',
        condition: '',
        story: '',
        
    })

   
 

    return(<div>
        <form>
        <h1 className="vehicleHeader">Vehicle Details</h1>
            <div className="vehicleDetailsRowOne">
                <FormControl component="fieldset">
                    <FormLabel component="legend">Chevy Chevelle ?</FormLabel>
                    <RadioGroup row aria-label id="chevelle"name="chevelle" value={form.chevelle} onChange={setFormInput}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                
                <TextField
                    required
                    id="year"
                    name="year"
                    label="Year"
                    onChange={setFormInput}
                    variant="outlined"
                    
                    />
                <TextField
                    required
                    id="color"
                    label="Color"
                    name="color"
                    variant="outlined"
                    onChange={setFormInput}
                    />
                <TextField
                    required
                    id="miles"
                    name="miles"
                    label="Miles"
                    defaultValue=""
                    variant="outlined"
                    onChange={setFormInput}
                    />
                
            </div>
            <div className="vehicleDetailsRowTwo">
            <FormControl component="fieldset">
                    <FormLabel component="legend">Transmission?</FormLabel>
                    <RadioGroup row aria-label id="transmission" name="transmission" value={form.transmission} onChange={setFormInput}>
                        <FormControlLabel value="Automatic" control={<Radio />} label="Automatic" />
                        <FormControlLabel value="Manual" control={<Radio />} label="Manual" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Air Conditioning?</FormLabel>
                    <RadioGroup row aria-label name="air" id="air" value={form.air} onChange={setFormInput}>
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <FormControl className="dropDowns">
                            <InputLabel>Engine</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="engine"
                                name="engine"
                                onChange={setFormInput}
                    >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="New">New</MenuItem>
                                <MenuItem value="Used">Used</MenuItem>
                                <MenuItem value="Rebuilt">Rebuilt</MenuItem>
                            </Select>  
                            
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Engine Condition?</FormLabel>
                    <RadioGroup row aria-label name="condition" id="condition" value={form.condition} onChange={setFormInput}>
                        <FormControlLabel value="Running" control={<Radio />} label="Running" />
                        <FormControlLabel value="Not Running" control={<Radio />} label="Not Running" />
                    </RadioGroup>
                </FormControl>
            </div>
            
            <div className="story">
                <h3>Tell Us Your Story</h3>
                <textarea className="comments" name="story" onChange={setFormInput} placeholder="
                Please share your story behind your Chevy 
                Chevelle and why having it restored would mean so much to you.">
                </textarea>
            </div>
        </form>
    </div>

    )
}

export default VehicleDetails