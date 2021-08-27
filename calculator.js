


class Calculator extends React.Component{
  
    constructor(props){
      super(props)  
      this.curr='0';
      this.prev='';
      this.opr='';
      this.man='';
      this.handleVal=this.handleVal.bind(this)
      this.handleopr=this.handleopr.bind(this);
      this.calculate=this.calculate.bind(this);
      this.handleMan=this.handleMan.bind(this);
      this.s1=[];
      
      this.state={
        currento:'',
        previouso:'',
        opero:''
      }
    }
  
     handleVal=(n)=>{
         console.log("l")
       if(this.curr==='0') this.curr=''
      if(n==='.' && this.curr.includes('.')) return
      if(n==='0' && this.curr==='') return
      this.curr=this.curr.toString()+n.toString();
      console.log(this.curr);
      console.log(`input number:${n}`)
       this.setState({
        currento:this.curr,
        previouso:this.prev
      })
   
      
    }
    
    handleopr=(op)=>{
      var found=this.s1.some(()=>{
        return this.s1.indexOf(op)!==-1;
      })
      if(!found) this.s1.push(op);
      
    
      this.opr=op;
      if(this.curr==='' || this.curr==='0') return
     
      if(this.prev!=='' && this.curr!==''){
      
      
        this.curr=this.calculate();
     
      
         this.setState({
        currento:this.curr,
        previouso:this.prev,
           opero:this.opr
         })
      }
       
      this.prev=this.curr;
      this.curr='';
      this.setState({
        currento:this.curr,
        previouso:this.prev,
        opero:this.opr
      })
     
     
     
      
    }
    handleMan=(cmd)=>{
      this.man=cmd;
      if(this.man==='AC'){
        this.curr='0';
        this.prev='';
     
        this.setState({
        currento:this.curr,
        previouso:this.prev,
          opero:this.opr
         })
      }
      if(this.man==='DEL'){
        this.curr=this.curr.toString().slice(0,-1)
        this.setState({
        currento:this.curr,
        previouso:this.prev,
          opero:this.opr
         })
      }
      if(this.man==='='){
        if(this.prev==='0') return
        this.opr=this.s1.shift();
      
        
        this.handleopr(this.opr)
         this.s1=[]
      }
      
      
    }
    
   calculate=()=>{
   
    
     
     switch(this.opr){
       case '+':
         return parseFloat(this.prev)+parseFloat(this.curr)
      
       case '-':
         return parseFloat(this.prev)-parseFloat(this.curr)
      
       case '*':
         return parseFloat(this.prev)*parseFloat(this.curr)
      
       case '/':
         let divAns=parseFloat(this.prev)/parseFloat(this.curr);
         return divAns.toFixed(4);
      
       default:
         return
         
      
         
     }
   
    }
  
     render(){
       
     return(   
        <div id="container">
            <div id="input-container"> 
              <p className="previou" >{this.prev}</p>
              <p className="current" id="display">{this.curr}</p>
             
            </div> 
           <div id="numb-container">
            <div id="inner-container">
            
           
            <button id="one" onClick={()=>{this.handleVal('1')}}>1</button>
             <button id="two" onClick={()=>{this.handleVal('2')}}>2</button>
             <button id="three" onClick={()=>{this.handleVal('3')}}>3</button>
             </div>
             <div id="inner-container">
             <button id="four" onClick={()=>{this.handleVal('4')}}>4</button>
             <button id="five" onClick={()=>{this.handleVal('5')}}>5</button>
             <button id="six" onClick={()=>{this.handleVal('6')}}>6</button>
             </div>
             <div id="inner-container">
             <button   id="seven"        onClick={()=>{this.handleVal('7')}}>7</button>
            <button   id="eight" onClick={()=>{this.handleVal('8')}}>8</button>
            <button   id="nine" onClick={()=>{this.handleVal('9')}}>9</button>
            </div>
            <div id="inner-container">
            <button  id="zero" onClick={()=>{this.handleVal('0')}}>0</button>
            <button   id="decimal" onClick={()=>{this.handleVal('.')}}>.</button>
            <button   id="equals" onClick={()=>this.handleMan('=')}>=</button>
            </div>
            <div id="inner-container">
                <Operation id="add" setOpr={()=>this.handleopr('+')} operand="+"/>
                <Operation id="subtract" setOpr={()=>this.handleopr('-')} operand="-"/>
                <Operation id="multiply" setOpr={()=>this.handleopr('*')} operand="*"/>
            </div>
               
           
            <div id="inner-container">
               <Operation id="divide" setOpr={()=>this.handleopr('/')} operand="/"/>
               <Manipulator id="clear" setMan={()=>this.handleMan('AC')} man='AC'></Manipulator>
  
               <Manipulator id="delete" setMan={()=>this.handleMan('DEL')} man='DEL'></Manipulator>
            </div>
  
            
             
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",color:"rgb(255,255,255,.87)"}}>
            <p>by muddassir</p>
          </div>
         
      </div>
     )
  }
  }
  const Manipulator=(props)=>{
    return(
      <button type="button" id={props.id} onClick={props.setMan}>{props.man}</button>
    )
  }
  const Operation=(props)=>{
    return(
       <button type="button" id={props.id}  onClick={props.setOpr}>{props.operand}</button>
    )
  }
//   const Number=(props)=>{
//     return(
//       <button type="button" className="btn btn-info col-4" onClick={props.setVal}>{props.num}</button>
//     )
    
//   }
  ReactDOM.render(<Calculator/>,document.getElementById("app"))