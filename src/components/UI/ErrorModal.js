import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const BackDrop = (props) => {
    return <div onClick={props.onButtonClick} className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            {props.message}
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onButtonClick}>Okay</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {
    return <>
        {ReactDOM.createPortal(<BackDrop onButtonClick={props.onButtonClick} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onButtonClick={props.onButtonClick} />, document.getElementById('overlay-root'))}
    </>
}

export default ErrorModal