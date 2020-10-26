import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'


class QuestionsForm extends React.Component{
    constructor(){
        super()
        this.state={
            question: '',
            select : [ 'Choose options','Short Answer', 'MultipleChoice', 'Checkbox' ],
            option: '',
            count:[]

        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelect = (e) => {
        this.setState({
            option: e.target.value
        })
        console.log("selected option", this.state.option)
    }

    handleAddOption = () => {
        this.setState({
            count: [...this.state.count, '']
        })
        
        console.log('set state', this.state.count)
    }

    render(){
        let multiple = this.state.option === 'MultipleChoice' && this.state.count.map((item, i) => {  
            console.log("multiplechoice", item) 
            return(
                <div>
                    <input type='radio' name="MultipleChoice" />
                    <input className="mb-5" placeholder="Enter option" style={{width: "520px", height: "45px",  border: "none", borderBottom: "3px solid rgb(0, 112, 255)"}} type="text" />
               
               </div>
            )
        })

        let checkBox = this.state.option === 'Checkbox' && this.state.count.map((item, i) => {
            return(
                <div>
                    <input type = 'checkbox' />
                    <input className="mb-5" placeholder="Enter option" style={{width: "520px", height: "45px",  border: "none", borderBottom: "3px solid rgb(0, 112, 255)"}} type="text" />
                </div>
            )
        })

        const select = this.state.select
        let selectList = select.map((ele, i)=>{
            return (
                <option key={i}> {ele} </option>
            )
        })
        
        return(
            <div className="question mb-5">
                <Container>
                <Form>

                <div style={{width:"60%",float: "left" }}>
                
                <Form.Group controlId='formBasicTitle'>
                                <Form.Control className='mt-5' style={{border: "none", borderBottom: "3px solid rgb(0, 112, 255)"}}
                                    type='text' 
                                    name='question'
                                    value={this.state.question} 
                                    onChange={this.handleChange} 
                                    placeholder='Question entered' 
                                    size='lg'
                                    required
                                />
                            </Form.Group>
                <br/>

                {
                    this.state.option === 'Short Answer' && <Form.Control size='lg' as="textarea" placeholder="Short answer text" type='text' className='input mb-5' />  
                }
                { 
                    this.state.option === 'MultipleChoice' && (
                                                            <div> <input type='radio' name="MultipleChoice" />
                                                             <input className="mb-5" 
                                                                placeholder="Enter option" 
                                                                style={{width: "520px", height: "45px",  border: "none", borderBottom: "3px solid rgb(0, 112, 255)"}} 
                                                                type="text" />
        
                                                            </div>
                                                        )
                }
                {multiple}
                {
                    this.state.option === 'MultipleChoice' && this.state.count.length !== 4 ? (<Button  onClick={this.handleAddOption}>Add option</Button>) : ""
                }
               { 
                    this.state.option === 'Checkbox' && (
                                                            <div> <input type='checkbox' />
                                                             <input className="mb-5" 
                                                                placeholder="Enter option" 
                                                                style={{width: "520px", height: "45px", border: "none", borderBottom: "6px solid rgb(0, 112, 255)"}} 
                                                                type="text" />
                                                            </div>
                                                        )
                }
                {checkBox}
                {
                    this.state.option === 'Checkbox' && this.state.count.length !== 4 ? <Button onClick={this.handleAddOption}>Add option</Button> : ''
                }
                </div>
                    <div className='mt-5' style={{width: "30%", float: "right"}}>
                        <Form.Control as="select" onChange={this.handleSelect} name='option' className='select'>
                            {selectList}
                        </Form.Control><br/>
                    </div>
                </Form>

                </Container>
            </div>
        )
    }
}

export default QuestionsForm
