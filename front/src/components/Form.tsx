import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Button, TextField, Container, Typography, Stack } from '@mui/material';

import { FormData } from '../api/types';
import { useAddShortUrl } from '../api/query';
import { urlSchema } from '../modules/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';

//force form by ts, zod
type FormSchema = z.infer<typeof urlSchema>;

//create form for entering long url
function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>
        ({ resolver: zodResolver(urlSchema) });

    const { mutate } = useAddShortUrl()

    //call to req for create in the end
    const onSubmit = async (data: FormData) => {
        mutate({ ...data })
    };

    return (
        <Container>
            <Typography variant='h5' sx={{ textDecoration: "underline" }}>Form</Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "5%" }}>
                <Stack spacing={2}>
                    <TextField
                        color={errors.longUrl && "error"}
                        label="Long URL"
                        variant="outlined"
                        sx={{ width: "50%" }}
                        {...register('longUrl', { required: true })}
                    />
                    {/* if there is long url an error display the error */}
                    <Typography color="error">{errors.longUrl?.message}</Typography>
                    <TextField
                        color={errors.expiresIn && "error"}
                        label="Expiration (seconds)"
                        variant="outlined"
                        type="number"
                        sx={{ width: "50%" }}
                        {...register('expiresIn', { required: true, valueAsNumber: true })}
                    />
                    {/* if there is expiresIn an error display the error */}
                    <Typography color="error">{errors.expiresIn?.message}</Typography>
                    <Button sx={{ width: "20%" }}
                        type="submit"
                        color="primary">Shorten URL</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default Form
