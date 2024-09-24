import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, TextField, Container, Typography } from '@mui/material';

import { FormData } from '../api/types';
import { useAddShortUrl } from '../api/query';

function Form() {
    const { register, handleSubmit } = useForm<FormData>();
    const { mutate } = useAddShortUrl()

    const onSubmit = async (data: FormData) => {
        mutate({ ...data })
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Long URL"
                    variant="outlined"
                    fullWidth
                    {...register('longUrl', { required: true })}
                />
                <TextField
                    label="short URL"
                    variant="outlined"
                    fullWidth
                    {...register('shortUrl', { required: true })}
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
