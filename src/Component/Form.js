import React from 'react'
import {Form, Container} from 'react-bootstrap'


class FormCreation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            description: '',
        }
    }    

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formdata={
            description: this.state.description,
            title: this.state.title
        }
        console.log("formData", formdata)
    }

    render(){
        return(
                <div className='mt-5 mb-5 header' >
                    
                    <Container>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Control className='mt-5' style={{border:'none',borderBottom:"3px solid rgb(0, 112, 255)"}}
                        id="title"
                        placeholder="Form title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name="title"
                        size='lg'
                    ></Form.Control><br/>

                    
                    <Form.Control border='none' style={{border:'none',borderBottom:"3px solid rgb(0, 112, 255)"}}
                    id="description"
                    placeholder="Form description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    name="description"
                    size='lg'
                    ></Form.Control>
                    
                </Form>
                </Container>
                </div> 
  )
        
    }
}

export default FormCreation