import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff,  } from '@material-ui/icons';
import useStyles from './ListStyles';

const List = () => {
    const classes = useStyles();

    const transactions = [
        {
            id: 1,
            type: 'Income',
            category: 'Salary',
            amount: 50,
            date: 'Mon Dec 27 2021'
        },
        {
            id: 2,
            type: 'Buiseness',
            category: 'Expennse',
            amount: 150,
            date: 'Mon Dec 27 2021'
        },
        {
            id: 3,
            type: 'Travel',
            category: 'Expense',
            amount: 50,
            date: 'Mon Dec 27 2021'
        },
    ];

    return (
        <MUIList className={classes.list} dense={false}>
            {
                transactions.map((transaction) => (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                            <ListItemSecondaryAction>
                                <IconButton onClick='' edge='end' aria-label='delete'>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))
            }
        </MUIList>
    )
}

export default List
