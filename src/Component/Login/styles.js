export const styles = {
    root: {
      borderBottomColor: '#EBEBEB',
      borderWidth: 0,
      textDecoration:'none'
    },
    input: {
      color: "#EBEBEB",
              borderBottomColor: "#EBEBEB",
          "&&&:before": {
              color: "#EBEBEB",
              borderBottomColor: "#EBEBEB",
          },
          "&&:after": {
           color: "#EBEBEB",
            
            borderBottomColor: "#EBEBEB",
          }
        
      
    },
    btn: {
      
          
          "&&&:before": {
              
              border:0,
          },
          "&&:after": {
           //color: "#EBEBEB",
            
            border:0,
          }
        
      
    },
    mainContainer:{display:'flex',flexDirection:'row',textAlign: 'center'},
    col1:{
        main:{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: '#f4f4f410'},
        h1:{color:'#484959',marginLeft:79,marginRight:79,marginTop:280,textAlign:'left',font:'Black 72px/86px Roboto',letterSpacing:0,fontWeight:'bold'},    
        p:{color:'#484959',marginLeft:79,marginRight:79,fontSize:15,textAlign:'left',font:'Light 32px/52px Roboto',letterSpacing:0}
    },

    col2:{
        main:{
        background: 'transparent linear-gradient(180deg, #5860AF 0%, #42E6D8 100%) 0% 0% no-repeat padding-box',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        fontSize: 'calc(10px + 2vmin)',
        color: '#f4f4f410'
       },
       div1:{marginTop:-40,display:'flex',flexDirection:'column'},
       logo:{width:250,height:92.31,marginBottom:73.84},
       textField:{borderColor: '#fff',marginTop:9,borderWidth: 2,flexDirection:'column',fontFamily:'Roboto',},
       btnSubmit:{border:'3px solid #303F9F',background:'transparent',marginTop:67,borderRadius:'30px',color:'#fff',outline:'none'},
       btnRecover:{border:'3px solid #303F9F',background:'transparent',marginTop:67,borderRadius:'30px',color:'#fff',outline:'none'}
    }   
  };