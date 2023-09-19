"use client"

import React, { useState } from 'react'
import { logIn, logOut, toggleModerator } from "./redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from './redux/store';
import { link } from 'fs';
import Link from 'next/link';

export default function LogIn() {

    const [username, setUsername] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth)

    const onClickLogIn = () => {
        dispatch(logIn(username))
    }

    const onClickToggle = () => {
        dispatch(toggleModerator())
    }


    const onClickLogOut = () => {
        dispatch(logOut())
    }


    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} style={{ color: 'black' }}/>
            <br />
            <button onClick={onClickLogIn}>Log In</button>
            <br />
            <button onClick={onClickLogOut}>Log Out</button>
            <br />
            {isAuth && <div>
                <div>
                    <button onClick={onClickToggle}>Toggle Moderator Status</button>
                </div>
                <div>
                    <Link href={`/nextpage`} > Click TO Next Page</Link>
                </div>
            </div>
            }
        </div>
    )
}


