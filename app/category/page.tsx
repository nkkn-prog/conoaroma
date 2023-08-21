"use client";
import { Client } from 'discord.js';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

//フォーム内の値について定義する
 type FormValues = {
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  favorite: boolean,
 }

export default function Form() {

  const { register, watch} = useForm<FormValues>();

  console.log(watch());

  return (
    <form>
      <div className='mb-6'>
        <label htmlFor="firstName">FirstName:</label>
        <input {...register("firstName")} id="firstName" className='border-black border-2'/>
      </div>

      <div className='mb-6'>
        <label htmlFor="lastName" className='border-black border-1'>LastName</label>
        <input {...register("lastName")} id="lastName" className='border-black border-2'/>
      </div>

      <div className='mb-6'>
        <label htmlFor="age">Age:</label>
        <input type="number" {...register("age")} id="age" className='border-black border-2'/>
      </div>

      <div className='mb-6'>
        <label htmlFor="gender">Gender:</label>
        <select {...register("gender")} id="gender" className='border-black border-2'>
          <option value="">Select...</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="node">No answer</option>
        </select>
      </div>

      <div>
        <label htmlFor="favorite">Do you like Coffee?</label>
        <select {...register("favorite")} id="favorite" className='border-black border-2'>
          <option value="">Select...</option>
          <option value="1">YES</option>
          <option value="0">NO</option>
        </select>
      </div>

      <input type="submit" className='border-black border-2'/>
    </form>
  )
};