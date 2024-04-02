import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, FormControl, InputLabel } from '@mui/material'
import '../index.css'

const FormCategoria = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit((data) => {})}>
        <FormControl>
          <TextField
            id='nombreCategoria'
            autoComplete='off'
            variant='outlined'
            label='Nombre'
            className='textfield'
            InputLabelProps={{ className: 'textfield__label' }}
            {...register('nombre', { required: 'Campo obligatorio' })}
            helperText={errors?.nombre ? errors.nombre.message : ''}
            error={errors?.nombre ? true : false}
            color='primary'
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ mt: 3 }}
          >
            Guardar
          </Button>
        </FormControl>
      </form>
      <InputLabel htmlFor='component-filled'>Name</InputLabel>
    </Box>
  )
}

export default FormCategoria
