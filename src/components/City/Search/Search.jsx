import React,{ useState } from 'react';
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
import { nameRequest } from './nameRequest'
import { capitalize } from '../../capitalize'
 
const Search = (props) => {
const [updateCityErr, setUpdateCityErr] = useState('')
const [text, setText] = useState('')
const handleChange = (event) => {
  setText(event.target.value);
};

async function updateCity(city) {
  try {
    const data = await nameRequest(city)
    props.setCity(data);
    return true;
  } catch {
    setUpdateCityErr('Город не найден')
    return false;
  }
}
const closeDrawer = () => {
  setText('');
  props.toggleDrawer(false)
}
const searchKeyDown = async (ev) => {
  setUpdateCityErr('')
    const isEnter = ev.keyCode===13
    if(isEnter) {
      const RE_LETTERS = /^[а-яёА-ЯЁA-Za-z -]+$/
      const isOnlyLetters = text.match(RE_LETTERS)
        if (!isOnlyLetters) {
          setUpdateCityErr('Недопустимые символы')
          return;
        }
      const isOk = await updateCity(ev.target.value)
      if (isOk){
      const compare = (el) => el.name === text
      if (!props.listCity.some(compare)){
        props.setListCity([{ name: capitalize(ev.target.value), value: ev.target.value }, ...props.listCity ])
      }
      closeDrawer()
    }
  } 
}

return (
<>
  <Drawer  anchor={'top'}
            open={props.state}
            onClose={closeDrawer}>
    <Box sx={{ width: 'auto' }}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}>
    </Box>
    <TextField  sx={{ width: 'auto', marginTop:'1rem' }} label="Введите название города"  
                onKeyDown={searchKeyDown}
                onChange={handleChange}
                value={text}
                error={updateCityErr.length > 0}
                helperText = {updateCityErr} />
    <List> {props.listCity.map(({ name, value }) => (
      <ListItem 
        onClick={closeDrawer}
        button key={name}
      >
        <ListItemText primary={name} 
                      onClick={() => updateCity(value)} />
      </ListItem>
    ))}
    </List>
  </Drawer>
  <div className={cl.text1}>{props.city}</div>
  <div className={cl.icon}>
    <Stack direction="row" spacing={1}>
      <IconButton onClick={() => props.toggleDrawer(true)}>
        <SearchOutlinedIcon />
      </IconButton>
    </Stack>
  </div>
</>
)
}
export default Search;