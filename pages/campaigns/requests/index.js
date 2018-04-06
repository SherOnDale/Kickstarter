import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestsPage extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const currentCampaign = campaign(address);
        const requestCount = await currentCampaign.methods
            .getRequestCount()
            .call();
        const contributorsCount = await currentCampaign.methods
            .contributorsCount()
            .call();
        const requests = await Promise.all(
            Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    return currentCampaign.methods.requests(index).call();
                })
        );
        return { address, requests, contributorsCount, requestCount };
    }

    renderRow() {
        return this.props.requests.map((request, index) => {
            return (
                <RequestRow
                    key={index}
                    id={index}
                    request={request}
                    address={this.props.address}
                    contributorsCount={this.props.contributorsCount}
                />
            );
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button
                            primary
                            floated="right"
                            style={{ marginBottom: 10 }}
                        >
                            Add Request
                        </Button>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>{this.renderRow()}</Body>
                </Table>
                <div>Found {this.props.requestCount} requests.</div>
            </Layout>
        );
    }
}

export default RequestsPage;
