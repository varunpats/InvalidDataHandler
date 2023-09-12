import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    return <div>
        <div onClick={props.onButtonClick} className={classes.backdrop} />
        <Card className={classes.modal}>
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
    </div>
}

export default ErrorModal