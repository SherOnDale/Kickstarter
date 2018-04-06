import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/Contribute';
import { Link } from '../../routes';

class CampaignPage extends Component {
    static async getInitialProps(props) {
        const currentCampaign = campaign(props.query.address);
        const summary = await currentCampaign.methods.getSummary().call();
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            contributorsCount: summary[3],
            managerAddress: summary[4],
            campaignAddress: props.query.address
        };
    }

    renderCards() {
        const {
            minimumContribution,
            balance,
            requestsCount,
            contributorsCount,
            managerAddress
        } = this.props;
        const items = [
            {
                header: managerAddress,
                meta: 'Address of Manager',
                description:
                    'The manager created this campaign and can create requests to withdraw money.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (Wei)',
                description:
                    'You must contribute atleast this much wei to become a contributor.'
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description:
                    'A request tries to withdraw money from the contract. Requests must be approved by contributors.'
            },
            {
                header: contributorsCount,
                meta: 'Number of Contributors',
                description:
                    'Number of people who have already donated to this campaign.'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (Ether)',
                description:
                    'The balance is how much money this campaign has left to spend.'
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm
                                address={this.props.campaignAddress}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link
                                route={`/campaigns/${
                                    this.props.campaignAddress
                                }/requests`}
                            >
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignPage;
