import React from 'react';
import Calculator from './Calculator';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      display:[],
      output:0,
      prevCalc:'',
      zeroAllow:true,
      calcLock:false,
      calcPerformed:false,
      decimalAllow:true
    };
    this.onButtonSubmit=this.onButtonSubmit.bind(this);
  }

  OnInputChange=(event)=>{
    
  }

  onButtonSubmit=(e)=>{
    if(this.state.calcLock===false){
      if(e.target.value==0&&this.state.display.length===0){
        this.setState({display: []});
      }else if(e.target.value>0&&this.state.display.length===0&&this.state.calcPerformed===true){
        this.clearButton();
        this.setState({display: e.target.value})
      }else if(e.target.value==='.'&&this.state.display.length===0){
        this.setState({display: this.state.display.concat(['0','.']),zeroAllow:true,decimalAllow:false})
      }else if(e.target.value==='clear'){
        this.clearButton()
      }else if(e.target.value==='='){
        if(this.state.calcPerformed===false){
          this.setState({display:[],output:this.makeCalculation(this.state.display),calcPerformed:true});
        }else{
          let displayArr=[...this.state.display]
          let outputVal=this.state.output
          displayArr.unshift(outputVal)
          this.setState({display:[],output:this.makeCalculation(displayArr)})
        }
          
        
        
      }
      else if(e.target.value==='+'||e.target.value==='*'||e.target.value==='-'||e.target.value==='/'||e.target.value==='.'){
        if(this.state.display[this.state.display.length-1]==='-'||
        this.state.display[this.state.display.length-1]==='*'||
        this.state.display[this.state.display.length-1]==='+'||
        this.state.display[this.state.display.length-1]==='/'){
          if(e.target.value==='-'){
          }
          else if(e.target.value==='+'||e.target.value==='*'||e.target.value==='/'){
            if(this.state.display[this.state.display.length-1]>0||this.state.display[this.state.display.length-1]<10){
              console.log('unccessary operation avoided')
            }else{
              let tempArr=[...this.state.display];
              tempArr.splice(tempArr.length-1,1);
              tempArr[tempArr.length-1]=e.target.value;
              this.setState({display:tempArr,calcLock:true,zeroAllow:true,decimalAllow:true})
            }
          }else if(e.target.value==='.'){
            if(this.state.display[this.state.display.length-1]==0){
              
              this.setState({display: this.state.display.concat(e.target.value),zeroAllow:true,decimalAllow:false})
            }else{
              this.setState({display: this.state.display.concat(['0','.']),zeroAllow:true,decimalAllow:false})
            }
          }
        }else if(e.target.value==='.'&&this.state.decimalAllow===true){
          this.setState({display: this.state.display.concat(e.target.value),decimalAllow:false,zeroAllow:true})
        }else if(e.target.value==='.'&&this.state.decimalAllow===false){
          console.log('blocked!')
        }else if(e.target.value==='+'||e.target.value==='*'||e.target.value==='-'||e.target.value==='/'){
          this.setState({display: this.state.display.concat(e.target.value),zeroAllow:true,decimalAllow:true})
        }else if(!(this.state.display[this.state.display.length-1]==0)){
          this.setState({display: this.state.display.concat(e.target.value),calcLock:true,zeroAllow:true});
        }else if(this.state.display[this.state.display.length-1]==0){
          this.setState({display: this.state.display.concat(e.target.value),calcLock:true,zeroAllow:true})
        }
      }else{
        if(e.target.value==0&&this.state.zeroAllow===true&&this.state.decimalAllow===false){
          this.setState({display: this.state.display.concat(e.target.value)})
        }else if(e.target.value==0&&this.state.zeroAllow===true){
          this.setState({display: this.state.display.concat(e.target.value)})
        }else if(this.state.zeroAllow===false){
          console.log('zero avoided')
        }else{
          this.setState({display: this.state.display.concat(e.target.value),zeroAllow:true})
        }
      }
    }else if(this.state.calcLock===true){
      if(e.target.value==='+'||e.target.value==='*'||e.target.value==='/'){
        if(!(this.state.display[this.state.display.length-1]==0)){
          let tempArr=[...this.state.display];
          tempArr[tempArr.length-1]=e.target.value;
          this.setState({display:tempArr,decimalAllow:true});
        }else{
          this.setState({display: this.state.display.concat(e.target.value)})
        }
      }else if(e.target.value==='-'){
        this.setState({display:this.state.display.concat(e.target.value),calcLock:false})
      }else if(e.target.value==='.' &&this.state.decimalAllow===true){
        if(this.state.display[this.state.display.length-1]==='.'){
        }else{
          this.setState({display:this.state.display.concat(0,'.'),capslock:false})
        }
      }else if(e.target.value==='clear'){
        this.clearButton()
      }else{
        if(e.target.value==0){
          this.setState({display: this.state.display.concat('0'),zeroAllow:false,calcLock:false})
        }else if(e.target.value==0&&this.state.zeroAllow===false){
          console.log('zero avoided')
        }else if(e.target.value>0&&this.state.zeroAllow===true){
          this.setState({display:this.state.display.concat(e.target.value),zeroAllow:true,calcLock:false})
        }        
      }
    }
   
  }

  clearButton(){
    this.setState({display: [],output:0,prevCalc:0,calcLock:false,zeroAllow:true,decimalAllow:true,calcPerformed:false});
  }

  makeCalculation=(arr)=>{
    let calcArr=[...arr];
    calcArr=calcArr.join("")
    let result=eval(calcArr);
    this.setState({display:result});
    

    // let operationArr=this.functionPreaperer(arr);
  
    return result;


    
  }

 
  

    render(){
 
     
      return(
        <Calculator onClick={this.onButtonSubmit} display={this.state.display} output={this.state.output}/>

      )
      
    

    
    
  }
}

export default App;
