import React from 'react';
import styles from './Tabs.module.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Robodoc } from '../robodoc/Robodoc'
import { Bradesco1 } from '../bradesco1/Bradesco1'
import { Bradesco2 } from '../bradesco2/Bradesco2'
import { Bradesco3 } from '../bradesco3/Bradesco3'
import { Bradesco4 } from '../bradesco4/Bradesco4'
import { Escriba1 } from '../escriba1/Escriba1'
import { Escriba2 } from '../escriba2/Escriba2'

export const ProjectTabs = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const theme = createTheme({
        palette: {
          primary: {
            main: '#6632CB',
          }
        }
      });

    return (
        <ThemeProvider theme={theme }>
          <TabContext value={value}>
              <div className={styles.TabsContainer}>
                <h3>Projects</h3>
                <p className={styles.Description}>The good stuff's in here. Feel free to discover my work and if we've spoken already, request access to the locked projects.</p>
                  <TabList onChange={handleChange} textColor='primary'>
                      <Tab label="All" value="1" sx={{color:'white'}}/>
                      <Tab label="Mobile" value="2" sx={{color:'white'}}/>
                      <Tab label="Desktop" value="3" sx={{color:'white'}}/>
                      <Tab label="Responsive" value="4" sx={{color:'white'}}/>
                      {/* <Tab label="Locked" value="5" sx={{color:'white'}}/> */}
                  </TabList>
              </div>
              <TabPanel value='1' sx={{padding:0}}>
                <Robodoc />
                <Bradesco1 />
                <Bradesco2 />
                <Bradesco3 />
                <Bradesco4 />
                <Escriba1 />
                <Escriba2 />
              </TabPanel>
              <TabPanel value='2' sx={{padding:0}}>
                <Robodoc />
                <Bradesco1 />
                <Bradesco2 />
                <Bradesco3 />
                <Bradesco4 />
              </TabPanel>
              <TabPanel value='3' sx={{padding:0}}>
                <Escriba1 />
                <Escriba2 />
              </TabPanel>
              <TabPanel value='4' sx={{padding:0}}>
                <Escriba1 />
                <Escriba2 />
              </TabPanel>
          </TabContext>
        </ThemeProvider>
    );
};