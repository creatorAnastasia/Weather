import React from 'react';
import cl from './Search.module.css'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { nameRequest } from './NameRequest'

 
const Search = (props) => {
// async function upDateSity(){
//   let data = await nameRequest(props.city)
// }
return(
<>
  <Drawer  anchor={'top'}
            open={props.state}
            onClose={props.toggleDrawer(false)}>
    <Box sx={{ width: 'auto' }}
          role="presentation"
          onClick={props.toggleDrawer(false)}
          onKeyDown={props.toggleDrawer(false)}>
    </Box>
    <TextField  sx={{ width: 'auto', margin:'1rem' }} label="Введите название города"  />
    <List> {props.listCity.map(({ name, value }) => (
      <ListItem 
        onClick={props.toggleDrawer(false)}
        button key={name}
      >
        <ListItemText primary={name} onClick={() => props.setCity({ name, value })} />
      </ListItem>
    ))}
    </List>
  </Drawer>
  <div className={cl.text1}>{props.city}</div>
  <div className={cl.icon}>
    <Stack direction="row" spacing={1}>
      <IconButton onClick={props.toggleDrawer(true)}>
        <SearchOutlinedIcon />
      </IconButton>
    </Stack>
  </div>
</>
)
}
export default Search;