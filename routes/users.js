import express from 'express';
import { uuid } from 'uuidv4';


const router = express.Router();

let users = [
// {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25
// },
// {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 20
// }
]


router.get('/', (req, res) => {
    console.log('Getting data');
    res.send(users);
})

// ADD A USER
router.post('/', (req, res) => {
    const user = req.body;
    const userId = uuid();
    const userWithId = { ...user, id: userId }
    users.push(userWithId);
    res.send(`User with username ${user.firstName} added to the database!`)
})

// DELETE A USER
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} was removed from database`);
})


// MODIFYING A USER 
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) {
        user.firstName = firstName;
    }

    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the id ${id} has been updated`);
})




export default router;