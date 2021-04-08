import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1.5),
        },
    },

    // textField: {
    //     marginLeft:"50%",

    // },

    imgLogin: {
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '30%',
        height: '30%',
        objectFit: 'contain',
    },

    // imgLoad: {
    //     display: 'block',
    //     marginRight: 'auto',
    //     marginLeft: 'auto',
    //     width: '100%',
    //     height: '100%',
    //     objectFit: 'contain',
    // },

    // video: {
    //     position: "absolute",
    //     width: "100%",
    //     left: "50%",
    //     top: "50%",
    //     height: "100%",
    //     objectFit: "cover",
    //     transform: "translate(-50%, -50%)",
    //     zIndex: "-1",
    // },

    // videoRetebio: {
    //     display: "flex",
    //     marginRight: 'auto',
    //     marginLeft: 'true',
        
    // },

    paper: {
        padding: theme.spacing(2),
    },

    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
    },
   
    buttonSubmit: {
        marginTop: 10,
    },

    // grid: {
    //     minHeight: '100vh',
    //     marginTop: 250,
    // },
}));