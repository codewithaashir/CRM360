import "typeface-roboto";
export const styles={
    root: {
        borderBottomColor: '#757575',
        borderWidth: 0,
        textDecoration:'none'
      },
      
      input: {
        color: "#757575",
                borderBottomColor: "#757575",
            "&&&:before": {
                color: "#757575",
                borderBottomColor: "#757575",
            },
            "&&:after": {
             color: "#757575",
              
              borderBottomColor: "#757575",
            }
          
        
      },
    container:{
        flexGrow:1,
        display:'flex',
        
        flexDirection:'column',textAlign: 'center',
    },
    row1:{
        main:{
            paddingLeft:"108px", paddingTop: "51px",
        background: '#FFFFFF',
        display: 'flex',
        textAlign:'center',
        justifyContent:'center',
        flexDirection: 'column',
        fontSize: 'calc(10px + 2vmin)',
        color: '#f4f4f410'},
        heading:{
               
                fontSize:'24px',
                fontFamily:'Roboto',
                fontWeight: "Medium",
                color: "#484959",
                textAlign: "left",
             
        },
        inputStyle:{
         display:'flex',
         flexDirection:'column',   
         marginTop:15,
         padding:10
        },
      textField:{borderColor: '#fff',marginTop:9,borderWidth: 2,flexDirection:'column',fontFamily:'Roboto',},

    },
    row2:{
        main:{
        background: '#FBFBFC',
        display: 'flex',
        flexDirection: 'row',
        textAlign:'center',
        justifyContent:'center',
        fontSize: 'calc(10px + 2vmin)',
        color: '#f4f4f410'},
        heading:{
            display:'flex',
            //flexDirection:'column',
            justifyContent:'flex-end',
            //textAlign:'right'
        }
       
    },
   
};
