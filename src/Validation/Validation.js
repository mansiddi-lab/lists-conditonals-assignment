import React  from 'react';

const validation = (props) => {
    //We can also use ternary operator
    let validationMsg = 'Text long enought!!';
    if(props.inputLength <= 5) {
        validationMsg = 'Text too short!';
    }
    
        return (
            <div>
                <p>{validationMsg}</p>
            </div>
        );
}

export default validation;