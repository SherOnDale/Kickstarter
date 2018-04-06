import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        const currentCampaign = campaign(this.props.address);
        try {
            const accounts = await web3.eth.getAccounts();
            await currentCampaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (e) {
            this.setState({ errorMessage: e.message.split('.')[0] + '.' });
        }
        this.setState({ loading: false, value: '' });
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label htmlFor="min">Contribute to this Campaign!</label>
                    <Input
                        id="min"
                        value={this.state.value}
                        onChange={event =>
                            this.setState({ value: event.target.value })
                        }
                        label="Ether"
                        labelPosition="right"
                    />
                </Form.Field>
                <Message
                    error
                    header="Oops!"
                    content={this.state.errorMessage}
                />
                <Button primary loading={this.state.loading}>
                    Contribute
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;
