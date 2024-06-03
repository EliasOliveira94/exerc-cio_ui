
import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';



const Exerxs = () => {
 const [Exerxs, setExerxs] = useState('');
  return(
    <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="exerxs" aria-describedby="area_test" value={Exerxs} onChange={e => { setExerxs(e.target.value) }}  />
              <FormHelperText id="tarefa_titulo_helper_text">Auterando Modulo</FormHelperText>
            </FormControl>
          </Grid>
  )
}
export default Exerxs;