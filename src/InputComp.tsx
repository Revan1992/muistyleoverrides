import { Input, InputLabel } from '@mui/material';
import './InputComp.scss';
// import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
// import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
// import { styled } from '@mui/system';

// const CustomButton = styled(ButtonUnstyled)`
//     font-family: sans-serif;
//     font-weight: bold;
//     font-size: 0.875rem;
//     background-color: red;
//     padding: 12px 24px;
//     border-radius: 8px;
//     color: white;
//     transition: all 150ms ease;
//     cursor: pointer;
//     border: none;

//     &:hover {
//         background-color: green;
//     }
// `;

// const CustomInput = styled(InputUnstyled)`
//     font-family: sans-serif;
//     font-weight: bold;
//     font-size: 0.875rem;
//     border-radius: 8px;
//     transition: all 150ms ease;
//     cursor: pointer;
//     border: none;
// `;

const InputComp = () => {
    return(
        <>
            <div className='displayFlexSpaceBetween'> 
                <InputLabel>User name</InputLabel>
                <InputLabel>Required*</InputLabel>
            </div>
            <Input type="text" placeholder="Enter Text" />
            <div className='displayFlexSpaceBetween'>
                <InputLabel >Some info text</InputLabel>
                <InputLabel>Some info text</InputLabel>
            </div>
            {/* <CustomButton>Button</CustomButton>
            <CustomInput></CustomInput> */}
        </>
    )
}

export default InputComp;