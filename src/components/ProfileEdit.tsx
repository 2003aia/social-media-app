import { Avatar, CircularProgress, FormControl, IconButton, Modal, Paper, Popover, TextField, Button } from '@mui/material'
import React, { useEffect, useState, FC, Dispatch, SetStateAction } from 'react'
import { Card, } from 'semantic-ui-react'
import { auth, firestore } from '../firebase';
import { FormPost } from './FormPost';
import { collection, doc, getDoc, limit, onSnapshot, orderBy, query, updateDoc, where } from '@firebase/firestore';

import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { storage } from '../firebase'

import { styled } from '@mui/material/styles';
import { convertTypeAcquisitionFromJson } from 'typescript';
import { style } from '../styles/editStyles';
import { Clear, SettingsInputComponent } from '@material-ui/icons';
const Input = styled('input')({
    display: 'none',
});


interface IProfileEdit {
    edit: boolean,
    image?: any,
    setImage?: any,
    setEdit?: any
}

export const ProfileEdit: FC<IProfileEdit> = ({ edit, image, setImage, setEdit }) => {

    const user = useAppSelector((data: RootState) => data.post.user)
    /*   const [image, setImage]: any = useState(null) */

    const userData = Object(user)

    const [email, setEmail] = useState(auth.currentUser?.email)
    const [nickname, setNickname] = useState(userData?.nickname)
    const [loading, setLoading] = useState(false)
    const uploadImage = async () => {

        if (image == null) {
            return null
        }

        const storageRef = ref(storage, `files/${auth.currentUser?.uid}/avatar` );

        const uploadTask = uploadBytes(storageRef, image, { contentType: 'image/png' })

        try {
            await uploadTask
            const url = await getDownloadURL(storageRef)
            return url

        } catch (error) {

            console.log(error);
            return null;
        }

    }


    return (
    
        <>
            <Modal
                open={edit}
                onClose={() => setEdit(false)}
            >

                <Paper
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 'auto',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }} >
                    <FormControl sx={{ m: -1 }}>
                        <IconButton 
                        onClick={()=>setEdit(false)}
                        style={{marginLeft: '70%'}}>
                           <Clear/> 
                        </IconButton>
                       

                        <label style={{ width: '100%' }} htmlFor="contained-button-file">
                            <Input id="contained-button-file" name='file' onChange={(e: any) => {

                                const files: any = e.target.files[0]

                                setImage(files)

                            }} accept="image/*" multiple type='file' />
                            <Button fullWidth style={{ width: '100%' }} variant="contained" component="span">
                                Upload image
                        </Button>
                        </label>
                        <br />
                        <TextField color='success' fullWidth name='email' label='email' variant='standard' value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
                        <br />
                        <TextField color='success' fullWidth name='email' label='nickname' variant='standard' value={nickname} onChange={(e) => { setNickname(e.currentTarget.value) }} />
                        <br />
                        {
                            loading == true ? <CircularProgress /> :
                                <Button style={{ width: '100%' }} onClick={async () => {
                                    if (auth.currentUser?.uid !== undefined) {
                                        setLoading(true)
                                        let image_url: any = await uploadImage()
                                        if (image_url == null && image) {
                                            image_url = image
                                        }
                                        const userRef = doc(firestore, 'users', auth.currentUser?.uid)
                                        await updateDoc(userRef, {
                                            email: email,
                                            nickname: nickname,
                                            avatar: /* user.avatar !== null ? user.avatar :  */image_url,
                                        }).then(() => {
                                            setLoading(false)
                                        })
                                    }
                                }} fullWidth>submit</Button>
                        }

                    </FormControl>

                </Paper>
            </Modal>
            
          
                <h2 style={{ wordWrap: 'break-word', width: 200, color: '#585859' }}>{auth.currentUser?.email || 'user'}</h2>
                <h3 style={{ wordWrap: 'break-word', width: 200, color: '#585859' }}>{userData?.nickname}</h3>
          
            </>
    )
}