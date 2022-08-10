import { CardMedia, createTheme, Switch, TextField, ThemeProvider } from '@mui/material';
import './App.scss';
import InputComp from './InputComp';
import SwitchComp from './Switch';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import img1 from './assets/img1.jpg';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle } from '@mui/icons-material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    extraSmall: true;
  }
}

declare module "@mui/material/Switch" {
  interface SwitchPropsSizeOverrides {
    extraSmall: true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: "extraSmall" },
          style: { fontSize: 8, padding: "4px 2px"}
        }
      ]
    }
  }
});

const themeSwitch = createTheme({
  components: {
    MuiSwitch: {
      variants: [
        {
          props: { size: "extraSmall" },
          style: { 
            fontSize: 8, 
            width: '100px !important',
            height: '57px !important',
            padding: '6px !important',
            '& .MuiSwitch-thumb': {
              width: '40px',
              height: '40px'
            },
            '& .MuiSwitch-track': {
              borderRadius: '30px !important'
            },
            '& .Mui-checked.MuiSwitch-switchBase': {
              transform: 'translateX(36px)'
            }
          }
        }
      ],
      // styleOverrides: {
      //   thumb: {
      //     width: '40px',
      //     height: '40px'
      //   }
      // }
    }
  }
});

function App() {
  return (
    <div className="App">
      <div className='display-flex pad-tb-0'>
        <h1>MUI restyling using JLL DS foundations</h1>
      </div>
      <div className='display-flex'>
        {/* <div className='comp-container'>
          <h2>JLL input component: </h2>
          <jll-input
            size="medium"
            value=""
            icon-left="home"
            icon-right="home"
            type="text"
            error-message="test error"
            success-message="test success"
            id="testId"
            placeholder="Enter Text"
          >
            <span slot="label-top-left">User name</span>
            <span slot="label-top-right">Required*</span>
            <span slot="label-bottom-right">Some info text</span>
            <span slot="label-bottom-left">Some info text</span>
          </jll-input>
        </div> */}
        <div className='comp-container'>
          <h4>Input field:</h4>
          <InputComp />
        </div>
        <div className='comp-container'>
          <h4>Input field disabled:</h4>
          <TextField value="Some text"  disabled={true} />
        </div>
        <div className='comp-container'>
          <h4>Input validation: Error</h4>
          <TextField
            error
            id="outlined-error"
            defaultValue="Some text"
            helperText="Incorrect entry."
            className='input-with-error'
          />
        </div>
        {/* <div className='comp-container'>
          <h2>MUI input component: <br />Theme override</h2>
          <InputComp1 />
        </div> */}
      </div>
      <div className='display-flex'>
        <div className='comp-container'>
          <h4>Input validation: Success</h4>
          <TextField
            id="outlined-error"
            defaultValue="Some text"
            className='validation-success'
          />
        </div>
        <div className='comp-container'>
          <h4>Input with icon</h4>
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            defaultValue="Some text"
            variant="standard"
          />
        </div>
      </div>
      <h2 style={{padding: '0 0 0 30px'}}>MUI switch component: </h2>
      <div className='display-flex'>
        {/* <div className='comp-container'>
          <h2>JLL switch component:</h2>
          <jll-switch label="Switch Label" />
        </div> */}
        <div className='comp-container'>
          <h4>Basic switch</h4>
          <SwitchComp></SwitchComp>
        </div>
        <div className='comp-container'>
          <h4>Switch with label:</h4>
          <span>Note: Switch component itself doesn't support label. A wrapper component is created in MUI to support this.</span>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          </FormGroup>
        </div>
        <div className='comp-container'>
          <h4>Switch variant created using theme override approach</h4>
          <ThemeProvider theme={themeSwitch}>
            <Switch size='extraSmall'></Switch>
          </ThemeProvider>
        </div>
        {/* <div className='comp-container'>
          <h2>MUI switch component: <br />Theme override</h2>
          <SwitchComp1></SwitchComp1>
        </div> */}
      </div>
      {/* <div style={{ padding: '30px' }}>
        <table>
          <thead>
            <th></th>
            <th>CSS Override</th>
            <th>Style Overrides with createTheme Override</th>
            <th>Global Theme Override</th>
          </thead>
          <tbody>
            <tr>
              <td>Efforts</td>
              <td>
                <p>
                  More efforts are required, need to target the exposed CSS
                  class and override each property to align the design to JLL
                  Design System.
                </p>
                <p>
                  Need to add an important decorator to increase the CSS
                  specificity.
                </p>
                <p>Highly Customizable.</p>
              </td>
              <td>
                <p>
                  Each component can be themed globally, targeting the style
                  override properties defined in the documentation.
                </p>
                <p>Highly Customizable.</p>
              </td>
              <td>
                <p>Changing the theme properties of MUI default theme.</p>
                <p>
                  As the construct of the MUI components is different from JLL
                  DS tokens, we can not override the base theme.
                </p>
                <p>Limited Customization.</p>
              </td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>
                Any new changes to the JLL Design System tokens, needs to be
                manually applied.
              </td>
              <td>
                Any new changes to the JLL Design System tokens, needs to be
                manually applied.
              </td>
              <td>Not recommended</td>
            </tr>
            <tr>
              <td>Code Size</td>
              <td>More</td>
              <td>Less compared to CSS Override</td>
              <td>Less compared to CSS Override</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '30px' }}>
          <strong>Pros:</strong>
          <ul>
            <li>Reduced effort - only override the style and leverage all the functionalities.</li>
            <li>100% compatible with the respective frameworks.</li>
          </ul>
          <strong>Cons:</strong>
          <ul>
            <li>Each framework should implement its own Wrapped Material UI Component Libraries.</li>
            <li>May have to adjust JLL Design Language to cover the limitation of MUI.</li>
            <li>We can't use JLL icons.</li>
            <li>Unnecessary default CSS Styles and features of MUI will be bundled and loaded to browser.</li>
          </ul>
        </div>
      </div> */}
      <h2 style={{padding: '0 0 0 30px'}}>MUI switch component: </h2>
      <div className='display-flex'>
        <div className='comp-container1'>  
          <h4>Basic card</h4>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div" className="card-heading1">
                Lorem ipsum
              </Typography>
              <Typography variant="body2">
                <h4>Sub heading</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis magnam quaerat veniam quae alias laboriosam, dicta perferendis ex omnis accusamus eum. Non earum praesentium quaerat. Rerum fuga similique delectus consequatur.</p>
              </Typography>
            </CardContent>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </div>
          </Card>
        </div>
        <div className='comp-container1'>
          <h4>Card with image</h4>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={img1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <div className='display-flex'>
        <div className='comp-container'>
          <h2>MUI Alerts: </h2>
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
