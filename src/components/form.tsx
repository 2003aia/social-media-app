import React, { useState, useEffect } from 'react'
/* import firebase from '../firebase' */
import { Form, Input, TextArea, Button, Select, Segment } from 'semantic-ui-react'

export default function TodoForm({ setIndex, index, setCurrentId, currentId, todoList }: any) {
    const [title, setTitle] = useState('');
    const [postData, setPostData] = useState({
        title: ''
    })

    const updateData = todoList?.find((r: any) => { if (r.id == currentId) { return r.title } })

    useEffect(() => {
        if (updateData) setPostData({ title: updateData.title })
    }, [updateData])

    const handleChange = (e: any) => {
        setPostData({ ...postData, title: e.target.value })
    }

    const clear = () => {
        setCurrentId(0)
        setPostData({
            title: ''
        })
    }
    const create = () => {
        if (currentId === 0) {
            const todoRef = null/*  firebase.database().ref('Todo'); */


            const todo = {
                title: postData.title
            }
            /*  todoRef.push(todo).then(() => {
                 setPostData({ title: '' })
             }) */
            setIndex(index + 1)
            clear()


        } else {
            /*  firebase.database().ref(`Todo/${currentId}`).update({
                 title: postData.title
             }) */
            clear()
        }
    }

    console.log(updateData, 'update data ')
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form>
                <Form.Field
                   
                    fluid
                    required
                    control={Input}
                    label='Post'
                    placeholder='add post'
                    type='text'
                    multiline
                    style={{width: '68vw'}}
                    onChange={handleChange} value={postData.title}
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    onClick={() => {
                        if (postData.title == '') {
                            console.log('empty')
                        } else {
                            create()
                        }
                    }}
                    content='add post'

                />
            </Form>
        </div>
    )
}
