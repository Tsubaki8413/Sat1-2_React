import { useState } from 'react';
import { Home, Mail, Info, AccountTree } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

const menu = [
    { title: 'ホーム', href: 'html', icon:'Home' },
    { title: '問い合わせ', href: 'contact.html', icon:'Mail' },
    { title: '会社概要', href: 'company.html', icon:'Info' },
    { title: 'サイトマップ', href: 'sitemap.html', icon:'AccontTree' },
];

export default function MaterialDrawer(){
    const [show, setShow] = useState(false);
    const handledraw = () => setShow(!show);

    return(
        <>
        <Button onClick={handledraw}>ドローワー</Button>
        <Drawer anchor='left' open={show}>
            <Box sx={{ height: '100vh' }} onClick={handledraw}>
                <List>
                    {menu.map(obj => {
                        const Icon = obj.icon;
                        return(
                        <ListItem key={obj.title}>
                            <ListItemButton href={obj.href}>
                                <ListItemIcon><Icon /></ListItemIcon>
                                <ListItemText primary={obj.title} />
                            </ListItemButton>
                        </ListItem>
                        );
                    })};
                </List>
            </Box>
        </Drawer>
        </>
    );
};