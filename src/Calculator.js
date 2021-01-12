import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

let displayStyle={
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'column',
    width: '300px',
    height: '400px',
    marginLeft: 'auto',
    background: ('90deg', 'rgba(44,46,47,1) 0%', 'rgba(94,94,94,1) 69%', 'rgba(42,51,52,1) 100%'),
    marginRight: 'auto',
    marginTop: '8em',
    fontFamily:'digital',
    border: '1px solid black',
    borderRadius:'10px',
    padding:'30px'
  }

const Calculator= ({onClick,onButtonSubmit,display,output}) => {
    
    return(
        <Container className="App" style={displayStyle}>
          <Row>
            <Col><Button onClick={onClick} value={'clear'} id='clear' variant="danger" size="sm">Clear</Button></Col>
            <Col><Badge pill variant="warning">Faruk Machine</Badge></Col>
          </Row>
          <Row  style={{background:'rgb(216,216,195)',border:'1px solid black',borderRadius:'5px'}}>
            <Col xl={12} >
             <div id='display' style={{textAlign:'right',verticalAlign:'text-top',display:'block'}}>{display}</div>
            </Col>
            
            <Col xl={12}>
            <div style={{textAlign:'right',verticalAlign:'text-top',display:'block'}}>
              {output}
              </div>
            </Col>
          </Row>
          <Row>
          <Col ><Button onClick={onClick} value={7} id='seven' variant="light">7</Button></Col>
          <Col ><Button onClick={onClick} value={8} id='eight' variant="light">8</Button></Col>
          <Col ><Button onClick={onClick} value={9} id='nine' variant="light">9</Button></Col>
          <Col ><Button onClick={onClick} value={'*'} id='multiply' variant="light">X</Button></Col>
          </Row>
          <Row>
          <Col><Button onClick={onClick} id='four' value={4} variant="light">4</Button></Col>
          <Col><Button onClick={onClick} id='five' value={5} variant="light">5</Button></Col>
          <Col><Button onClick={onClick} id='six' value={6} variant="light">6</Button></Col>
          <Col><Button onClick={onClick} id='seven' value={'-'} variant="light">-</Button></Col>
          </Row>
          <Row>
          <Col><Button onClick={onClick} id='one' value={1} variant="light">1</Button></Col>
          <Col><Button onClick={onClick} id='two' value={2} variant="light">2</Button></Col>
          <Col><Button onClick={onClick} id='three' value={3} variant="light">3</Button></Col>
          <Col><Button onClick={onClick} id='divide' value={'/'} variant="light">/</Button></Col>
          </Row>
          <Row>
          <Col><Button onClick={onClick} id='zero' value={0} variant="light">0</Button></Col>
          <Col><Button onClick={onClick} id='decimal' value={'.'} variant="light">.</Button></Col>
          <Col><Button onClick={onClick} id='add' value={'+'} variant="light">+</Button></Col>
          <Col><Button onClick={onClick} id='equals' value={'='} variant="warning">=</Button></Col>
          </Row>
        </Container>

    
    ) 
    }
    
    export default Calculator;