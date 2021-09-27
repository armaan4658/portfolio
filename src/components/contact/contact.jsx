import './contact.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    {/* <input type="text" placeholder="email"/>
                    <textarea placeholder="message"/>
                    <button type="submit">Send</button> */}
                    <TextField 
                    type="text"
                    label="email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className="input"
                    />
                    <TextField 
                    type="text"
                    label="message"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className="input"
                    multiline={true}
                    minRows="5"
                    />
                    <Button
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    className="input"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}