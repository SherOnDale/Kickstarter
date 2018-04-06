import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class NewCampaignPage extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();
        this.setState({ errorMessage: '', loading: true });
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute('/');
        } catch (e) {
            this.setState({ errorMessage: e.message.split('.')[0] + '.' });
        }
        this.setState({ loading: false });
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>
                <Form
                    onSubmit={this.onSubmit}
                    error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label htmlFor="min">Minimum Contribution</label>
                        <Input
                            id="min"
                            label="Wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({
                                    minimumContribution: event.target.value
                                })
                            }
                        />
                    </Form.Field>
                    <Message
                        error
                        header="Oops!"
                        content={this.state.errorMessage}
                    />
                    <Button primary loading={this.state.loading}>
                        Create!
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default NewCampaignPage;
