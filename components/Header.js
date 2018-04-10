import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Link route="/">
                <a className="item">KickStarter</a>
            </Link>
            <Menu.Menu position="right">
                <Link route="/">
                    <a className="item">Campaigns</a>
                </Link>
                <Link route="/campaigns/new">
                    <a className="item">
                        <Button basic color="white" icon="plus" />
                    </a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};
