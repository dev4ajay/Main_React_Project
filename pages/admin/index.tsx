import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import LogoPic from 'public/webp.png';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { alertService, userService } from '@/services';
import _ from 'lodash';


export default function Login() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = ({ username, password }) => {
    alertService.clear();
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        router.push('admin/home');
      })
      .catch(alertService.error);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="pt-3 px-2">
      <Grid container>
        <Grid item xs={6} className="hidden sm:hidden md:hidden lg:block xl:block">
          <Image src={LogoPic} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-10">
              <h1 className="text-4xl text-[#1c4680] font-black">Welcome Back!</h1>
              <p className="text-lg">Login to Continue</p>
              <div className="my-5 mr-[auto]">
                <TextField
                  {...register('username')}
                  className="w-full sm:w-full md:w-full lg:w-[70%] xl:w-[70%]"
                  id="outlined-basic"
                  placeholder="Enter Email"
                  variant="outlined"
                  error={errors.username ? true : false}
                  helperText={errors.username?.message.toString()}
                />
              </div>
              <div className="my-5 mr-[auto]">
                <TextField
                  {...register('password')}
                  className="w-full sm:w-full md:w-full lg:w-[70%] xl:w-[70%]"
                  id="outlined-basic"
                  placeholder="Password"
                  variant="outlined"
                  type="password"
                  error={errors.password ? true : false}
                  helperText={errors.password?.message.toString()}
                />
              </div>
              <div className="flex py-4 w-full sm:w-full md:w-full lg:w-[70%] xl:w-[70%]">
                <Button
                  disabled={formState.isSubmitting}
                  type="submit"
                  className="bg-[#1c4680] hover:bg-[#1c4680] hover:bg-opacity-75 px-7 rounded-full py-3 text-white btn btn-primary"
                    startIcon= {formState.isSubmitting && (  
                    <CircularProgress size={22} color='inherit'/>
                    )}
                >                 
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
