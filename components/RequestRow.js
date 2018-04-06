import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {
    state = {
        approveLoading: false,
        finalizeLoading: false
    };

    onAprove = async () => {
        this.setState({ approveLoading: true });
        const accounts = await web3.eth.getAccounts();
        const currentCampaign = campaign(this.props.address);
        await currentCampaign.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
        this.setState({ approveLoading: false });
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };

    onFinalize = async () => {
        this.setState({ finalizeLoading: true });
        const accounts = await web3.eth.getAccounts();
        const currentCampaign = campaign(this.props.address);
        await currentCampaign.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        });
        this.setState({ finalizeLoading: false });
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };

    render() {
        const { Row, Cell } = Table;
        const { id, request, contributorsCount } = this.props;
        const readyToFinalize = request.approvalCount > contributorsCount / 2;
        return (
            <Row
                disabled={request.complete}
                positive={readyToFinalize && !request.complete}
            >
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>
                    {request.approvalCount}/{contributorsCount}
                </Cell>
                <Cell>
                    {request.complete ? null : (
                        <Button
                            loading={this.state.approveLoading}
                            positive
                            basic
                            onClick={this.onAprove}
                        >
                            Approve
                        </Button>
                    )}
                </Cell>
                <Cell>
                    {request.complete ? null : (
                        <Button
                            loading={this.state.finalizeLoading}
                            secondary
                            basic
                            onClick={this.onFinalize}
                        >
                            Finalize
                        </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;
