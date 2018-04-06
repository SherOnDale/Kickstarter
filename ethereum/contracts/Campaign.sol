pragma solidity 0.4.21;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint min) public {
        address newCampaign = new Campaign(min, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public contributors;
    uint public contributorsCount;
    Request[] public requests;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint min, address creator) public {
        manager = creator;
        minimumContribution = min;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        contributors[msg.sender] = true;
        contributorsCount++;
    }

    function createRequest(string desc, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: desc,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(contributors[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (contributorsCount / 2));
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            address(this).balance,
            requests.length,
            contributorsCount,
            manager
        );
    }

    function getRequestCount() public view returns (uint) {
        return requests.length;
    }
}