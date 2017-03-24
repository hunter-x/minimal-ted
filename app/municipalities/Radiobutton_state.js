import React, { Component } from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
const Radio_state = (props)=>{
	return(
			<div className={props.style}>
	            <RadioButtonGroup onChange={props.handleMunState}  name="etatmun" defaultSelected="all" style={{height:'55px !important'}} >
					<RadioButton
					labelStyle={{color:'black'}}
					value="all"
					label="all"
					 />
					<RadioButton
					labelStyle={{color:'#274796'}}
					value="old"
					label="old"				        
					/>
					<RadioButton
					labelStyle={{color:'#F5942F'}}
					value="extended"
					label="extended"
					/>
					<RadioButton
					labelStyle={{color:'#E73F40'}}
					value="new"
					label="new"
					/>
				</RadioButtonGroup>
	        </div>	
	);
}
export default Radio_state