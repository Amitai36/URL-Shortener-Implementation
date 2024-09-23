import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, TextField, Container, Typography } from '@mui/material';

interface FormData {
    longUrl: string;
    expiresIn?: number;
}


function Form() {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        const response = await axios.post('http://localhost:3000/api/url/shorten', data);
        alert(`Short URL: ${response.data.shortUrl}`);
    };

    return (
        <Container>
            <Typography variant="h4">URL Shortener</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Long URL"
                    variant="outlined"
                    fullWidth
                    {...register('longUrl', { required: true })}
                />
                <TextField
                    label="Expiration (seconds)"
                    variant="outlined"
                    type="number"
                    fullWidth
                    {...register('expiresIn')}
                />
                <Button type="submit" variant="contained" color="primary">Shorten URL</Button>
            </form>
        </Container>
    )
}

export default Form
