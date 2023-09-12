import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const onUsernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const onAgeChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const resetError = () => {
        setError(null);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: "Missing values",
                message: "Please enter valid username and age.(non-empty values)"
            })
            return;
        }
        if (+age <= 0) {
            setError({
                title: "Invalid age",
                message: "Please enter valid age.(> 0)"
            })
            return;
        }
        props.passUsersData(username, age);
        setUsername('');
        setAge('');
    }

    return <div>
        {error && <ErrorModal onButtonClick={resetError} title={error.title} message={error.message} />}
        <Card className={classes.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={username} onChange={onUsernameChangeHandler} />
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" value={age} onChange={onAgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>
}

export default AddUser;